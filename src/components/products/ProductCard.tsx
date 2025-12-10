import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/hooks/useProducts";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart!`, {
      icon: "🛒",
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  return (
    <Card
      className={cn(
        "group overflow-hidden border-border/50 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-nature",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-nature/10">
            <span className="text-6xl">🌿</span>
          </div>
        )}

        {product.category && (
          <Badge className="absolute left-3 top-3 bg-background/90 text-foreground backdrop-blur-sm">
            {product.category}
          </Badge>
        )}

        {product.stock_quantity !== null && product.stock_quantity <= 5 && product.stock_quantity > 0 && (
          <Badge variant="destructive" className="absolute right-3 top-3">
            Only {product.stock_quantity} left!
          </Badge>
        )}

        {product.stock_quantity === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <Badge variant="secondary" className="text-lg">Out of Stock</Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="font-display text-lg font-semibold leading-tight">{product.name}</h3>
          {product.description && (
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold text-primary">
            {formatPrice(Number(product.price))}
          </span>

          <Button
            onClick={handleAddToCart}
            disabled={product.stock_quantity === 0}
            size="sm"
            className="gap-2 bg-gradient-nature shadow-nature transition-all hover:scale-105"
          >
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;