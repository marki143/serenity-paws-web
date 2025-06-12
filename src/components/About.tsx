
const About = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-outfit font-light text-gray-800 leading-tight">
              Creating Safe Spaces for Healing
            </h2>
            <div className="space-y-6 text-lg font-overpass text-gray-600 leading-relaxed">
              <p>
                At Serenity Space, we believe that healing happens through connection, understanding, and gentle support. Our approach is rooted in compassion and tailored to meet the unique needs of each individual.
              </p>
              <p>
                We specialize in working with teenagers and adults with autism, ADHD, and other disabilities, creating a non-clinical environment where everyone feels welcomed, valued, and understood.
              </p>
              <p>
                Through the healing power of animal-assisted therapy, meaningful conversations, and practical relaxation techniques, we help you build resilience, find peace, and develop the tools you need to thrive.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden gentle-shadow">
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Peaceful therapy environment with animals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-lavender-200 rounded-full blur-xl opacity-60" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blush-200 rounded-full blur-xl opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
