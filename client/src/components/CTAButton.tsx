import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/analytics";
import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "outline" | "phone" | "directions";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
  "data-testid"?: string;
}

export function CTAButton({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  size = "default",
  "data-testid": testId,
}: CTAButtonProps) {
  const handleClick = () => {
    trackCTAClick(typeof children === "string" ? children : "cta");
    onClick?.();
  };

  const sizeClasses = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3";

  const getIcon = () => {
    if (variant === "phone") return <Phone className="w-4 h-4" />;
    if (variant === "directions") return <MapPin className="w-4 h-4" />;
    if (variant === "primary") return <ArrowRight className="w-4 h-4" />;
    return null;
  };

  const getButtonVariant = () => {
    if (variant === "secondary" || variant === "phone" || variant === "directions") {
      return "outline";
    }
    return "default";
  };

  if (href?.startsWith("tel:") || href?.startsWith("http") || href?.startsWith("https")) {
    return (
      <Button
        variant={getButtonVariant()}
        className={`${sizeClasses} gap-2 font-semibold ${className}`}
        onClick={handleClick}
        asChild
        data-testid={testId}
      >
        <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
          {getIcon()}
          {children}
        </a>
      </Button>
    );
  }

  if (href) {
    return (
      <Button
        variant={getButtonVariant()}
        className={`${sizeClasses} gap-2 font-semibold ${className}`}
        onClick={handleClick}
        asChild
        data-testid={testId}
      >
        <Link href={href}>
          {getIcon()}
          {children}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      variant={getButtonVariant()}
      className={`${sizeClasses} gap-2 font-semibold ${className}`}
      onClick={handleClick}
      data-testid={testId}
    >
      {getIcon()}
      {children}
    </Button>
  );
}
