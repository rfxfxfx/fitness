import React from 'react';
import { Dumbbell, Users, Target, Clock, Heart, Trophy } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Strength Training",
      description: "Build muscle and increase power with our comprehensive strength training programs designed for all fitness levels.",
      image: "https://images.pexels.com/photos/685530/pexels-photo-685530.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardio Fitness",
      description: "Improve your cardiovascular health with high-energy cardio sessions that burn calories and boost endurance.",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Classes",
      description: "Join our motivating group fitness classes including yoga, pilates, HIIT, and dance fitness.",
      image: "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personal Training",
      description: "Get personalized attention with one-on-one training sessions tailored to your specific goals.",
      image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Functional Training",
      description: "Develop real-world strength and mobility with functional movement patterns and exercises.",
      image: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Athletic Performance",
      description: "Elite training programs for athletes looking to enhance their competitive performance.",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive fitness solutions designed to help you achieve your goals, 
            whether you're just starting or training for competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-orange-400">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;