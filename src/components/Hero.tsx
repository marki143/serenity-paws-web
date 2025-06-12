
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-outfit font-light text-gray-800 mb-6 leading-tight">
            Serenity Space
          </h1>
          <p className="text-xl md:text-2xl font-overpass text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            A safe haven for healing through connection, understanding, and gentle support
          </p>
          <p className="text-lg md:text-xl font-overpass text-gray-600 mb-12 max-w-3xl mx-auto">
            Specialized support for teenagers and adults with autism, ADHD, and other disabilities through animal-assisted therapy and compassionate care
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-outfit font-medium rounded-full gentle-shadow hover-lift"
          >
            Begin Your Journey
          </Button>
        </div>
      </div>
      
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-lavender-50/20 via-transparent to-blush-50/20" />
    </section>
  );
};

export default Hero;
