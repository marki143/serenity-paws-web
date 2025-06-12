
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Cat, Dog } from "lucide-react";

const services = [
  {
    title: "Animal-Assisted Therapy",
    description: "Healing connections through the gentle presence of therapy animals. Our trained companions provide comfort and support during your journey.",
    icon: Cat,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Talk Therapy",
    description: "Safe, non-judgmental conversations in a supportive environment. We listen, understand, and guide you through your unique path.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Relaxation Techniques",
    description: "Learn calming strategies and mindfulness practices that you can use anywhere. Find your inner peace and build resilience.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "General Support Work",
    description: "Comprehensive care tailored to your individual needs. We're here to support you in all aspects of your wellness journey.",
    icon: Dog,
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-lavender-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-light text-gray-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl font-overpass text-gray-600 max-w-3xl mx-auto">
            Compassionate, individualized support designed to meet you exactly where you are
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover-lift border-0 gentle-shadow bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-lavender-100">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-outfit font-medium text-gray-800">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-overpass text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
