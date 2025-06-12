
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-outfit font-light text-gray-800 mb-6">
          Ready to Begin?
        </h2>
        <p className="text-xl font-overpass text-gray-600 mb-12 max-w-2xl mx-auto">
          Take the first step towards healing and growth. We're here to support you on your journey.
        </p>
        
        <div className="max-w-md mx-auto">
          <p className="text-lg font-overpass text-gray-800 mb-8">
            hello@serenityspace.com
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-outfit font-medium rounded-full px-8 py-3"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
