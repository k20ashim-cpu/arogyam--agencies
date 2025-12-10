import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/products/ProductGrid";
import { useProducts } from "@/hooks/useProducts";

interface FeaturedProductsProps {
  searchQuery?: string;
}

const FeaturedProducts = ({ searchQuery }: FeaturedProductsProps) => {
  const { data: products, isLoading } = useProducts(undefined, searchQuery);
  const featuredProducts = searchQuery ? products : products?.slice(0, 8);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              {searchQuery ? (
                <>Search Results for "<span className="text-gradient-nature">{searchQuery}</span>"</>
              ) : (
                <>Our <span className="text-gradient-nature">Healthy</span> Products</>
              )}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {searchQuery 
                ? `Found ${featuredProducts?.length || 0} products`
                : "Handpicked for your wellness journey"
              }
            </p>
          </div>
          {!searchQuery && (
            <Link to="/menu">
              <Button variant="ghost" className="gap-2">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        <ProductGrid products={featuredProducts} isLoading={isLoading} />
      </div>
    </section>
  );
};

export default FeaturedProducts;