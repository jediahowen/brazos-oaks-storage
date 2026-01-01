import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Login() {
  const storagizePortalUrl = "https://portal.storagize.com";

  return (
    <>
      <SEO
        title="Owner Login | Brazos Oaks Storage"
        description="Access the Storagize management portal for Brazos Oaks Storage facility management."
      />

      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-6 bg-muted/30">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Owner Login</CardTitle>
            <CardDescription>
              Access the Storagize management portal
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <a
              href={storagizePortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                size="lg"
                className="w-full gap-2"
                data-testid="button-storagize-portal"
              >
                <ExternalLink className="w-5 h-5" />
                Go to Storagize Portal
              </Button>
            </a>
            <p className="text-sm text-muted-foreground text-center">
              You will be redirected to the Storagize management system.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
