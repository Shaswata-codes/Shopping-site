import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Shop: ["Men's Wear", "Women's Wear", "Kids Wear", "Electronics", "Trending"],
    Company: ["About Us", "Contact", "Careers", "Press", "Blog"],
    Support: ["Help Center", "Shipping Info", "Returns", "Track Order", "Size Guide"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Shopsy
            </div>
            <p className="text-muted-foreground mb-4">
              Your one-stop shop for fashion, electronics, and trending products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Shopsy. All rights reserved. Made with ❤️ for fashion lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
