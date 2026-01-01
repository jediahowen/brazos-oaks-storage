import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { initGTM } from "@/lib/analytics";
import Home from "@/pages/Home";
import UnitSizes from "@/pages/UnitSizes";
import FAQ from "@/pages/FAQ";
import About from "@/pages/About";
import Rent from "@/pages/Rent";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/unit-sizes" component={UnitSizes} />
      <Route path="/faq" component={FAQ} />
      <Route path="/about" component={About} />
      <Route path="/rent" component={Rent} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    initGTM();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Nav />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
