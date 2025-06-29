import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      name: "Sarah Johnson",
      role: "Head Trainer & Nutrition Specialist",
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Strength Training", "Nutrition", "Body Composition"],
      experience: "8 years",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Marcus Chen",
      role: "Athletic Performance Coach",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Athletic Training", "HIIT", "Functional Fitness"],
      experience: "6 years",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "Yoga & Wellness Instructor",
      image: "https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Yoga", "Pilates", "Mindfulness"],
      experience: "5 years",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "David Kim",
      role: "Powerlifting Specialist",
      image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Powerlifting", "Strength", "Competition Prep"],
      experience: "10 years",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Your <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Trainers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our certified professionals are here to guide, motivate, and help you achieve 
            your fitness goals with personalized training and expert knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div 
              key={index}
              className="group bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a href={trainer.social.instagram} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={trainer.social.twitter} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={trainer.social.linkedin} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-orange-400 font-medium mb-4">{trainer.role}</p>
                
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm">
                  <span className="font-medium">{trainer.experience}</span> experience
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;