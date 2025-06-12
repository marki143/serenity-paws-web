
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The animal therapy sessions have been life-changing for my daughter. She's found confidence and peace she never had before.",
    author: "Sarah M., Parent"
  },
  {
    quote: "Finally, a place where I feel truly understood. The support here has helped me navigate challenges I thought were impossible.",
    author: "Alex R., Young Adult"
  },
  {
    quote: "The relaxation techniques I learned here have become part of my daily routine. I feel more centered and capable.",
    author: "Jamie L., Teen"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-lavender-50/30 to-blush-50/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-light text-gray-800 mb-6">
            Stories of Hope
          </h2>
          <p className="text-xl font-overpass text-gray-600 max-w-2xl mx-auto">
            Hear from families and individuals who have found healing and growth through our programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 gentle-shadow bg-white/80 backdrop-blur-sm hover-lift">
              <CardContent className="p-8">
                <blockquote className="text-gray-700 font-overpass text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-primary font-outfit font-medium not-italic">
                  — {testimonial.author}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
