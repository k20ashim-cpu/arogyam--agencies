import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-nature">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight">
                  Aarogyam
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Agencies
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Bringing nature's goodness to your doorstep. Pure, organic, and healthy food products for a better life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/menu" className="hover:text-foreground">Our Products</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/menu?category=grains" className="hover:text-foreground">Organic Grains</Link></li>
              <li><Link to="/menu?category=oils" className="hover:text-foreground">Cold Pressed Oils</Link></li>
              <li><Link to="/menu?category=spices" className="hover:text-foreground">Natural Spices</Link></li>
              <li><Link to="/menu?category=honey" className="hover:text-foreground">Pure Honey</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@aarogyamagencies.com</li>
              <li>+91 7667227333</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aarogyam Agencies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;