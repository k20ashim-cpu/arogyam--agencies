import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import CategoryFilter from "@/components/products/CategoryFilter";
import SearchBar from "@/components/common/SearchBar";
import { useProducts, useCategories } from "@/hooks/useProducts";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { data: products, isLoading } = useProducts(selectedCategory, searchQuery);
  const { data: categories = [] } = useCategories();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-hero py-12 md:py-16">
          <div className="container">
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Our <span className="text-gradient-nature">Products</span>
            </h1>
            <p className="mt-2 text-muted-foreground">
              Explore our range of natural and organic products
            </p>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search products..."
              />
            </div>
            <ProductGrid products={products} isLoading={isLoading} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;