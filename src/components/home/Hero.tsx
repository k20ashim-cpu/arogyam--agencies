import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/common/SearchBar";

interface HeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const Hero = ({ searchQuery, onSearchChange }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24 lg:py-32">
      {/* Decorative Elements */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute right-1/4 top-1/4 h-32 w-32 rounded-full bg-accent/15 blur-2xl" />

      {/* Floating Elements */}
      <div className="absolute left-[10%] top-[20%] hidden animate-float text-4xl lg:block" style={{ animationDelay: "0s" }}>🥬</div>
      <div className="absolute right-[15%] top-[30%] hidden animate-float text-3xl lg:block" style={{ animationDelay: "0.5s" }}>🍯</div>
      <div className="absolute left-[20%] bottom-[25%] hidden animate-float text-3xl lg:block" style={{ animationDelay: "1s" }}>🌾</div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Leaf className="h-4 w-4" />
            <span>100% Natural & Organic</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Nourish Your Body with{" "}
            <span className="text-gradient-nature">Nature's Best</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
            Discover our curated collection of organic grains, cold-pressed oils, natural spices, 
            and pure honey. Health begins with what you eat.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mb-8 max-w-md">
            <SearchBar
              value={searchQuery}
              onChange={onSearchChange}
              placeholder="Search for healthy products..."
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/menu">
              <Button size="lg" className="gap-2 bg-gradient-nature px-8 shadow-nature transition-all hover:scale-105">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="px-8">
                Our Story
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-4 w-4 text-primary" />
              </div>
              <span>Organic Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-4 w-4 text-primary" />
              </div>
              <span>Health Focused</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;