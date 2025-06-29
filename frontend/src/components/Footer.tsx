import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">FitForce</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your body and mind with our world-class fitness facilities, 
              expert trainers, and supportive community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-orange-400 transition-colors">Trainers</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-orange-400 transition-colors">Membership</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-orange-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Strength Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Cardio Fitness</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Group Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Personal Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Nutrition Coaching</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>123 Fitness Avenue</p>
                  <p>Downtown District, City 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">hello@fitforce.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 FitForce. All rights reserved. Built with passion for fitness.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;