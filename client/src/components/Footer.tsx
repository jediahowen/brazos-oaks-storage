import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Warehouse } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/unit-sizes", label: "Unit Sizes" },
  { href: "/rent", label: "Reserve Online" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const hours = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday", time: "9:00 AM - 4:00 PM" },
  { day: "Sunday", time: "Closed" },
  { day: "Gate Access", time: "24/7" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <Warehouse className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Brazos Oaks</span>
                <span className="text-xs text-muted-foreground leading-tight">Storage</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Secure, affordable self-storage in the heart of Central Texas. Serving Waco, Elm Mott, and surrounding communities.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+12547445127"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                data-testid="link-footer-phone"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>(254) 744-5127</span>
              </a>
              <a
                href="mailto:info@brazosoaksstorage.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>info@brazosoaksstorage.com</span>
              </a>
              <a
                href="https://maps.google.com/?q=123+Storage+Lane,+Elm+Mott,+TX+76640"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-foreground hover:text-primary transition-colors"
                data-testid="link-footer-address"
              >
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Storage Lane<br />Elm Mott, TX 76640</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Office Hours
            </h3>
            <ul className="space-y-2">
              {hours.map((item) => (
                <li key={item.day} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">{item.day}</span>
                  <span className="font-medium">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Brazos Oaks Storage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

