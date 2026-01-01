import { SEO } from "@/components/SEO";
import { CTAButton } from "@/components/CTAButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@shared/schema";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ"
        description="Find answers to frequently asked questions about Brazos Oaks Storage. Learn about access hours, payments, security, and more."
      />

      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about renting a storage unit with us. Can't find your answer? Give us a call!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-card"
                data-testid={`accordion-faq-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our team is happy to help. Reach out by phone or visit our contact page.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              href="tel:+12547445127"
              variant="phone"
              data-testid="button-call-us"
            >
              Call (254) 744-5127
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" data-testid="button-contact">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
