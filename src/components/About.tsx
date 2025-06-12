
const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-outfit font-medium text-gray-800 leading-tight">
              Creating Safe Spaces for Healing
            </h2>
            <div className="space-y-4 text-base font-overpass text-gray-600 leading-relaxed">
              <p>
                At Serenity Space, we believe that healing happens through connection, understanding, and gentle support. Our approach is rooted in compassion and tailored to meet the unique needs of each individual.
              </p>
              <p>
                We specialize in working with teenagers and adults with autism, ADHD, and other disabilities, creating a non-clinical environment where everyone feels welcomed, valued, and understood.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Peaceful therapy environment with animals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
