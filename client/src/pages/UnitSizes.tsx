import { SEO } from "@/components/SEO";
import { UnitSizeCard } from "@/components/UnitSizeCard";
import { CTAButton } from "@/components/CTAButton";
import { unitSizes } from "@shared/schema";
import { Ruler } from "lucide-react";

export default function UnitSizes() {
  return (
    <>
      <SEO
        title="Unit Sizes & Pricing"
        description="Find the perfect storage unit size for your needs. From 5x5 closet-sized units to 10x20 garage-sized spaces. View what fits and reserve online."
      />

      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Ruler className="w-4 h-4" />
              Find Your Perfect Fit
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
              Unit Sizes & Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              We offer a variety of unit sizes to fit your needs, from small personal storage to large vehicle and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {unitSizes.map((unit) => (
              <UnitSizeCard key={unit.id} unit={unit} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Not sure which size you need? Give us a call and we'll help you find the right fit.
            </p>
            <CTAButton
              href="tel:+12547445127"
              variant="phone"
              data-testid="button-call-help"
            >
              Call (254) 744-5127
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our team is available to help you select the perfect unit size. We can even show you available units in person before you commit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/rent" data-testid="button-reserve-now">
              Reserve a Unit Now
            </CTAButton>
            <CTAButton
              href="/contact"
              variant="secondary"
              data-testid="button-contact-us"
            >
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
