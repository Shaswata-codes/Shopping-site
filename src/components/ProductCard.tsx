import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  category: string;
}

const ProductCard = ({ name, price, originalPrice, rating, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-soft hover:shadow-strong transition-smooth cursor-pointer">
      <div className="relative overflow-hidden aspect-square bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
        />
        {originalPrice && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
          </div>
        )}
      </div>
      <CardContent className="p-4 space-y-3">
        <div className="text-xs text-muted-foreground uppercase tracking-wide">{category}</div>
        <h3 className="font-semibold text-lg line-clamp-2">{name}</h3>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">({rating}.0)</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-x-2">
            <span className="text-2xl font-bold text-primary">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
            )}
          </div>
          <Button variant="default" size="icon" className="rounded-full">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
