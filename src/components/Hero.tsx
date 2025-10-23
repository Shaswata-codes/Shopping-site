import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroMens from "@/assets/hero-mens.jpg";
import heroWomens from "@/assets/hero-womens.jpg";
import heroKids from "@/assets/hero-kids.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Men's Fashion Collection",
      description: "Discover the latest trends in men's wear with up to 50% off",
      cta: "Order Now",
      image: heroMens,
    },
    {
      id: 2,
      title: "Women's Exclusive Range",
      description: "Elegant styles that define sophistication and comfort",
      cta: "Order Now",
      image: heroWomens,
    },
    {
      id: 3,
      title: "Kids Wear Wonderland",
      description: "Colorful, comfortable, and fun outfits for your little ones",
      cta: "Order Now",
      image: heroKids,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {slide.description}
              </p>
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-medium"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-medium"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-smooth ${
              index === currentSlide ? "bg-primary scale-125" : "bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
