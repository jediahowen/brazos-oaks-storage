import { SEO } from "@/components/SEO";
import { CTAButton } from "@/components/CTAButton";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Building, Shield, MapPin } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Your belongings are protected by 24/7 surveillance, secure fencing, and individual gate access codes.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "We treat every customer like family. Friendly service and genuine care are at our core.",
  },
  {
    icon: Award,
    title: "Quality Facilities",
    description: "Clean, well-maintained units with wide driveways and excellent lighting throughout.",
  },
];

const milestones = [
  { year: "2008", event: "Brazos Oaks Storage opens with 50 units" },
  { year: "2012", event: "Expanded to 100+ units due to community demand" },
  { year: "2016", event: "Upgraded security system with HD cameras" },
  { year: "2020", event: "Added online reservations for customer convenience" },
  { year: "Today", event: "Continuing to serve Central Texas families" },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Brazos Oaks Storage - a family-owned self-storage facility serving Waco and Elm Mott, Texas for over 15 years."
      />

      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building className="w-4 h-4" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
              About Brazos Oaks Storage
            </h1>
            <p className="text-lg text-muted-foreground">
              A family-owned storage facility dedicated to serving our Central Texas community with integrity and care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Locally Owned, Community Focused
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Brazos Oaks Storage was founded in 2008 by a local Waco family who saw a need for quality, affordable storage in the Elm Mott area. What started as a small operation has grown into a trusted name in Central Texas self-storage.
                </p>
                <p>
                  Unlike large national chains, we're hands-on owners who live and work in this community. When you call, you talk to someone who knows your name and genuinely cares about helping you.
                </p>
                <p>
                  Our mission is simple: provide a safe, clean, and convenient place for our neighbors to store their belongings at fair prices. We believe storage should be stress-free, which is why we offer flexible month-to-month rentals with no long-term contracts.
                </p>
              </div>
              <div className="mt-8">
                <CTAButton href="/contact" data-testid="button-meet-team">
                  Get In Touch
                </CTAButton>
              </div>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Family Owned Since 2008</h3>
                    <p className="text-muted-foreground">Serving Waco & Elm Mott, TX</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do at Brazos Oaks Storage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full" data-testid={`card-value-${index}`}>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              Key milestones in the Brazos Oaks story.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  data-testid={`milestone-${index}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                    <div className="bg-card border border-border rounded-lg p-4">
                      <span className="text-primary font-bold">{milestone.year}</span>
                      <p className="text-muted-foreground text-sm mt-1">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1.5 z-10" />
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Us Today
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            We'd love to show you around our facility and help you find the perfect unit for your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              href="https://maps.google.com/?q=123+Storage+Lane,+Elm+Mott,+TX+76640"
              variant="directions"
              size="lg"
              className="bg-white text-primary border-white"
              data-testid="button-get-directions"
            >
              Get Directions
            </CTAButton>
            <CTAButton
              href="tel:+12547445127"
              variant="phone"
              size="lg"
              className="border-white/50 text-white"
              data-testid="button-call-about"
            >
              Call (254) 744-5127
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
