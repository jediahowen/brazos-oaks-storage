import { useState } from "react";
import { SEO } from "@/components/SEO";
import { CTAButton } from "@/components/CTAButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BOOKING_SNIPPET_HTML, EXTERNAL_BOOKING_URL } from "@/lib/bookingSnippet";
import { trackRentEmbedLoaded } from "@/lib/analytics";
import { Calendar, ExternalLink, Phone, Loader2 } from "lucide-react";

export default function Rent() {
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadEmbed = () => {
    setIsLoading(true);
    setTimeout(() => {
      setEmbedLoaded(true);
      setIsLoading(false);
      trackRentEmbedLoaded();
    }, 500);
  };

  return (
    <>
      <SEO
        title="Reserve a Unit"
        description="Reserve your storage unit online at Brazos Oaks Storage. Quick, easy online reservations with no hidden fees."
      />

      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Quick & Easy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
              Reserve Your Unit Online
            </h1>
            <p className="text-lg text-muted-foreground">
              Secure your storage unit in just a few clicks. No credit card required for reservations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Online Reservation</h2>
                <p className="text-muted-foreground">
                  Click below to load our reservation tool and select your unit.
                </p>
              </div>

              {!embedLoaded ? (
                <div className="flex flex-col items-center gap-6 py-8">
                  <Button
                    size="lg"
                    onClick={handleLoadEmbed}
                    disabled={isLoading}
                    className="px-8 py-4 text-lg gap-2"
                    data-testid="button-load-reservation"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        Load Reservation Tool
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Clicking this button will load our secure booking system.
                  </p>
                </div>
              ) : (
                <div
                  className="booking-embed"
                  data-testid="container-booking-embed"
                  dangerouslySetInnerHTML={{ __html: BOOKING_SNIPPET_HTML }}
                />
              )}

              <div className="border-t border-border mt-8 pt-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="outline" asChild className="gap-2" data-testid="button-external-booking">
                    <a href={EXTERNAL_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Open in New Window
                    </a>
                  </Button>
                  <CTAButton
                    href="tel:+12547445127"
                    variant="phone"
                    data-testid="button-call-reserve"
                  >
                    Call to Reserve
                  </CTAButton>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6" data-testid="benefit-no-commitment">
              <h3 className="font-semibold mb-2">No Commitment</h3>
              <p className="text-sm text-muted-foreground">
                Reservations are free and don't require a credit card.
              </p>
            </div>
            <div className="p-6" data-testid="benefit-hold">
              <h3 className="font-semibold mb-2">48-Hour Hold</h3>
              <p className="text-sm text-muted-foreground">
                Your reserved unit is held for 48 hours at no charge.
              </p>
            </div>
            <div className="p-6" data-testid="benefit-pricing">
              <h3 className="font-semibold mb-2">No Hidden Fees</h3>
              <p className="text-sm text-muted-foreground">
                The price you see is the price you pay. Transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prefer to Talk to Someone?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our friendly staff is ready to help you find the perfect unit over the phone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              href="tel:+12547445127"
              variant="phone"
              size="lg"
              data-testid="button-call-help"
            >
              <Phone className="w-5 h-5" />
              Call (254) 744-5127
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
