
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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-light text-gray-800 mb-6">
            Our Holistic Healing Services for Mind and Body Wellness
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group border-0 shadow-none bg-transparent text-center p-6"
            >
              <CardHeader className="pb-6">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-gray-400" />
                </div>
                <CardTitle className="text-xl font-outfit font-medium text-gray-800 mb-4">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 font-overpass text-base leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
                <button className="text-gray-800 font-overpass text-sm hover:text-primary transition-colors">
                  Learn More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
