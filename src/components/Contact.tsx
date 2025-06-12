
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        
        <Card className="max-w-md mx-auto border-0 gentle-shadow bg-gradient-to-br from-lavender-50 to-blush-50/50">
          <CardHeader>
            <CardTitle className="text-2xl font-outfit font-medium text-gray-800">
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-gray-600 font-overpass">
              <p>📧 hello@serenityspace.com</p>
              <p>📞 (555) 123-CALM</p>
              <p>📍 Your peaceful location</p>
            </div>
            <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-outfit font-medium rounded-full gentle-shadow hover-lift"
            >
              Schedule a Consultation
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
