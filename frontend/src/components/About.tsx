import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Trainers",
      description: "All our trainers are certified professionals with years of experience"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Supportive Community",
      description: "Join a welcoming fitness community that motivates and inspires"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Open 24/7 to fit your schedule, whenever motivation strikes"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Prime Location",
      description: "Conveniently located with easy access and parking"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">FitForce</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              For over a decade, FitForce has been the premier destination for fitness enthusiasts 
              seeking real results. We believe fitness is not just about physical transformation—it's 
              about building confidence, discipline, and a lifestyle that empowers you.
            </p>

            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Our state-of-the-art facility combines cutting-edge equipment with expert guidance 
              to create an environment where everyone can thrive, from beginners taking their first 
              steps to athletes pushing their limits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern Gym Interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-gray-800 p-6 rounded-2xl border border-gray-700">
              <div className="text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-gray-400 text-sm">Years of Excellence</div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-1">5K+</div>
              <div className="text-white/90 text-sm">Happy Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;