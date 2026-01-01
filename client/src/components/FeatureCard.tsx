import { Card, CardContent } from "@/components/ui/card";
import { Clock, Camera, Sparkles, Calendar, Truck, MapPin, LucideIcon } from "lucide-react";
import type { Feature } from "@shared/schema";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Camera,
  Sparkles,
  Calendar,
  Truck,
  MapPin,
};

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const IconComponent = iconMap[feature.icon] || Clock;

  return (
    <Card className="text-center h-full" data-testid={`card-feature-${feature.id}`}>
      <CardContent className="p-6 flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <IconComponent className="w-7 h-7 text-primary" />
        </div>
        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  );
}
