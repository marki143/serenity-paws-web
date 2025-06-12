
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Cat, Dog } from "lucide-react";

const services = [
  {
    title: "Animal-Assisted Therapy",
    description: "Healing connections through the gentle presence of therapy animals.",
    icon: Cat,
  },
  {
    title: "Talk Therapy",
    description: "Safe, non-judgmental conversations in a supportive environment.",
    icon: Users,
  },
  {
    title: "Relaxation Techniques",
    description: "Learn calming strategies and mindfulness practices for inner peace.",
    icon: Heart,
  },
  {
    title: "General Support Work",
    description: "Comprehensive care tailored to your individual needs.",
    icon: Dog,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-outfit font-medium text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg font-overpass text-gray-600 max-w-2xl mx-auto">
            Comprehensive support services designed to help you thrive
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-outfit font-medium text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <CardDescription className="text-gray-600 font-overpass text-sm leading-relaxed">
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
