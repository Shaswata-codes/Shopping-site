import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  // Sample product data
  const topRatedProducts = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 29,
      originalPrice: 49,
      rating: 5,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      category: "Men's Wear",
    },
    {
      id: 2,
      name: "Designer Denim Jacket",
      price: 89,
      originalPrice: 149,
      rating: 5,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      category: "Women's Wear",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 129,
      originalPrice: 199,
      rating: 5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      category: "Electronics",
    },
    {
      id: 4,
      name: "Kids Sneakers",
      price: 45,
      originalPrice: 79,
      rating: 5,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&h=500&fit=crop",
      category: "Kids Wear",
    },
  ];

  const mensWearProducts = [
    {
      id: 5,
      name: "Formal Blazer",
      price: 149,
      originalPrice: 249,
      rating: 4,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=500&fit=crop",
      category: "Men's Wear",
    },
    {
      id: 6,
      name: "Casual Chinos",
      price: 59,
      originalPrice: 89,
      rating: 4,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop",
      category: "Men's Wear",
    },
    {
      id: 7,
      name: "Leather Belt",
      price: 35,
      rating: 5,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      category: "Accessories",
    },
    {
      id: 8,
      name: "Sports Watch",
      price: 199,
      originalPrice: 299,
      rating: 5,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      category: "Accessories",
    },
  ];

  const kidsWearProducts = [
    {
      id: 9,
      name: "Colorful Hoodie",
      price: 39,
      originalPrice: 59,
      rating: 5,
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&h=500&fit=crop",
      category: "Kids Wear",
    },
    {
      id: 10,
      name: "Denim Shorts",
      price: 29,
      originalPrice: 45,
      rating: 4,
      image: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=500&h=500&fit=crop",
      category: "Kids Wear",
    },
    {
      id: 11,
      name: "Cartoon T-Shirt Pack",
      price: 49,
      originalPrice: 79,
      rating: 5,
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&h=500&fit=crop",
      category: "Kids Wear",
    },
    {
      id: 12,
      name: "Backpack Set",
      price: 55,
      rating: 5,
      image: "https://images.unsplash.com/photo-1577982787983-e07c6730f2d1?w=500&h=500&fit=crop",
      category: "Kids Wear",
    },
  ];

  const electronicsProducts = [
    {
      id: 13,
      name: "Smart Watch Pro",
      price: 299,
      originalPrice: 449,
      rating: 5,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop",
      category: "Electronics",
    },
    {
      id: 14,
      name: "Bluetooth Speaker",
      price: 79,
      originalPrice: 129,
      rating: 4,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
      category: "Electronics",
    },
    {
      id: 15,
      name: "Gaming Mouse",
      price: 49,
      originalPrice: 79,
      rating: 5,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
      category: "Electronics",
    },
    {
      id: 16,
      name: "Wireless Keyboard",
      price: 89,
      rating: 4,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
      category: "Electronics",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductSection
        id="top-rated"
        title="Top Rated Products"
        subtitle="Discover our customers' favorite picks"
        products={topRatedProducts}
      />
      <ProductSection
        id="mens"
        title="Men's Collection"
        subtitle="Style that speaks volumes"
        products={mensWearProducts}
      />
      <ProductSection
        id="kids"
        title="Kids Wonderland"
        subtitle="Fun and comfort for the little ones"
        products={kidsWearProducts}
      />
      <ProductSection
        id="electronics"
        title="Electronics & Gadgets"
        subtitle="Tech that enhances your lifestyle"
        products={electronicsProducts}
      />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
