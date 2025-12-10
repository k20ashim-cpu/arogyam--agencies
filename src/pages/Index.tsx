import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <FeaturedProducts searchQuery={searchQuery} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;