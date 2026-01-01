import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "./CTAButton";
import { Check } from "lucide-react";
import type { UnitSize } from "@shared/schema";

interface UnitSizeCardProps {
  unit: UnitSize;
}

export function UnitSizeCard({ unit }: UnitSizeCardProps) {
  return (
    <Card className="flex flex-col h-full" data-testid={`card-unit-${unit.id}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-2xl font-bold">{unit.dimensions}</h3>
            <p className="text-muted-foreground">{unit.sqft} - {unit.description}</p>
          </div>
          <Badge variant="secondary" className="text-base px-3 py-1">
            From ${unit.startingPrice}/mo
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-3">
          What Fits
        </h4>
        <ul className="space-y-2">
          {unit.whatFits.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4">
        <CTAButton
          href="/rent"
          className="w-full"
          data-testid={`button-reserve-${unit.id}`}
        >
          Reserve This Size
        </CTAButton>
      </CardFooter>
    </Card>
  );
}
