import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  category: string;
}

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  id?: string;
}

const ProductSection = ({ title, subtitle, products, id }: ProductSectionProps) => {
  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h2>
          {subtitle && <p className="text-xl text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
