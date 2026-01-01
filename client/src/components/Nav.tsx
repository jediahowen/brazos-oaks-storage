import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { CTAButton } from "./CTAButton";
import { Menu, X, Warehouse } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/unit-sizes", label: "Unit Sizes" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
              <Warehouse className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">Brazos Oaks</span>
              <span className="text-xs text-muted-foreground leading-tight">Storage</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`font-medium ${
                    location === link.href ? "bg-accent" : ""
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <CTAButton href="/rent" size="default" data-testid="button-nav-reserve">
              Reserve a Unit
            </CTAButton>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-16 bg-background border-t border-border z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: 'hsl(var(--background))' }}
      >
        <div className="flex flex-col p-6 gap-2 bg-background min-h-full">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              <Button
                variant="ghost"
                className={`w-full justify-start text-lg h-12 font-medium ${
                  location === link.href ? "bg-accent" : ""
                }`}
                data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-border">
            <CTAButton
              href="/rent"
              size="lg"
              className="w-full"
              onClick={() => setIsOpen(false)}
              data-testid="button-mobile-reserve"
            >
              Reserve a Unit
            </CTAButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
