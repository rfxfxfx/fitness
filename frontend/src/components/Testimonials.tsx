import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jessica Martinez",
      role: "Marketing Manager",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "FitForce transformed not just my body, but my entire mindset. The trainers are incredibly supportive and the community feels like family. I've never felt stronger or more confident!",
      rating: 5,
      achievement: "Lost 30 lbs in 6 months"
    },
    {
      name: "Michael Thompson",
      role: "Software Engineer",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "As someone who works long hours, FitForce's 24/7 access is a game-changer. The equipment is top-notch and the personal training sessions helped me reach goals I never thought possible.",
      rating: 5,
      achievement: "Gained 15 lbs muscle"
    },
    {
      name: "Rachel Kim",
      role: "Teacher",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The group classes at FitForce are amazing! The energy is infectious and the instructors make every workout fun. I look forward to my workouts now instead of dreading them.",
      rating: 5,
      achievement: "Completed first marathon"
    },
    {
      name: "David Park",
      role: "Business Owner",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "FitForce isn't just a gym, it's a lifestyle change. The nutrition guidance and personalized training plan helped me achieve results I struggled with for years at other gyms.",
      rating: 5,
      achievement: "Reduced body fat by 12%"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real transformations from real people. See how FitForce has helped thousands 
            of members achieve their fitness goals and change their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 hover:scale-105 relative"
            >
              <div className="absolute top-6 right-6 text-orange-400 opacity-20">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-lg p-4">
                <p className="text-orange-400 font-semibold text-sm">
                  Achievement: {testimonial.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gray-800 rounded-full px-8 py-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
              ))}
            </div>
            <div className="h-6 w-px bg-gray-600"></div>
            <div className="text-white">
              <span className="font-bold">4.9/5</span>
              <span className="text-gray-400 ml-2">from 2,500+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;