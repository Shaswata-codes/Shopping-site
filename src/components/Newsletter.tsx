import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Mail className="w-16 h-16 mx-auto text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Stay Updated with Shopsy</h2>
          <p className="text-lg text-muted-foreground">
            Subscribe to our newsletter and get exclusive deals, new arrivals, and fashion tips
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button variant="default" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
