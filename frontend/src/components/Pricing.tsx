import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "29",
      period: "month",
      description: "Perfect for getting started with your fitness journey",
      features: [
        "Gym access during regular hours",
        "Basic equipment usage",
        "Locker room access",
        "Online workout resources",
        "Community support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Premium",
      price: "59",
      period: "month",
      description: "Our most popular plan with comprehensive features",
      features: [
        "24/7 gym access",
        "All equipment and facilities",
        "2 personal training sessions/month",
        "Group fitness classes",
        "Nutrition consultation",
        "Mobile app access",
        "Guest passes (2/month)"
      ],
      buttonText: "Most Popular",
      popular: true
    },
    {
      name: "Elite",
      price: "99",
      period: "month",
      description: "Premium experience with unlimited personal attention",
      features: [
        "24/7 priority gym access",
        "Unlimited personal training",
        "All group classes",
        "Private training room access",
        "Custom meal planning",
        "Body composition analysis",
        "Unlimited guest passes",
        "Recovery services"
      ],
      buttonText: "Go Elite",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Flexible membership options designed to fit your lifestyle and budget. 
            Start your transformation today with our comprehensive fitness programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gray-900 rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-2 border-orange-500 shadow-xl shadow-orange-500/20' 
                  : 'border border-gray-700 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
                
                <button 
                  className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg hover:shadow-orange-500/25'
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
              
              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-orange-500' : 'bg-gray-700'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">All plans include a 7-day free trial</p>
          <p className="text-sm text-gray-500">
            No commitment required • Cancel anytime • All major credit cards accepted
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;