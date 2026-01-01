import { SEO } from "@/components/SEO";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@shared/schema";
import { Shield, Award, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Secure, affordable self-storage in Waco and Elm Mott, Texas. 24/7 access, security cameras, and month-to-month rentals. Reserve your unit online today!"
      />

      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Trusted by Waco Families & Businesses
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-testid="text-hero-title">
            Secure Storage in{" "}
            <span className="text-primary">Waco</span>{" "}
            You Can Trust
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
            Conveniently located in Elm Mott, Texas. Drive-up access, 24/7 gate entry, and flexible month-to-month rentals for all your storage needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/rent" size="lg" data-testid="button-hero-reserve">
              Reserve a Unit
            </CTAButton>
            <CTAButton
              href="tel:+12547445127"
              variant="phone"
              size="lg"
              data-testid="button-hero-call"
            >
              Call (254) 744-5127
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center" data-testid="stat-units">
              <span className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</span>
              <span className="text-muted-foreground">Storage Units</span>
            </div>
            <div className="flex flex-col items-center" data-testid="stat-access">
              <span className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</span>
              <span className="text-muted-foreground">Gate Access</span>
            </div>
            <div className="flex flex-col items-center" data-testid="stat-years">
              <span className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</span>
              <span className="text-muted-foreground">Years Serving Waco</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Brazos Oaks Storage?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're committed to providing a safe, clean, and convenient storage experience for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Reserve your unit online in minutes or give us a call. We're here to help you find the perfect storage solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              href="/rent"
              variant="secondary"
              size="lg"
              className="bg-white text-primary border-white"
              data-testid="button-cta-reserve"
            >
              Reserve Online Now
            </CTAButton>
            <CTAButton
              href="/unit-sizes"
              variant="outline"
              size="lg"
              className="border-white/50 text-white"
              data-testid="button-cta-sizes"
            >
              View Unit Sizes
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Name You Can Trust
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                For over 15 years, Brazos Oaks Storage has been the trusted choice for families and businesses in Central Texas. Our commitment to security, cleanliness, and customer service sets us apart.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Locally Owned & Operated</h4>
                    <p className="text-sm text-muted-foreground">We live here too. Your belongings matter to us.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Friendly, Helpful Staff</h4>
                    <p className="text-sm text-muted-foreground">Real people ready to help, not automated phone trees.</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Secure Storage Facility</p>
                    <p className="text-sm text-muted-foreground">Elm Mott, Texas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
