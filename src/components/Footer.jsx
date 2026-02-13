import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">H</div>
            <span className="font-bold text-xl tracking-tight">VitalSy</span>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Providing world-class healthcare with a personal touch. Your health is our priority.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"><Twitter size={18} /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"><Instagram size={18} /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#doctors" className="hover:text-primary transition-colors">Doctors</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Services</h3>
          <ul className="space-y-4 text-gray-400">
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Pediatrics</li>
            <li>Emergency Care</li>
            <li>General Checkup</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Contact Info</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-primary mt-1" />
              <span>123 Health Street, Sydney, NSW 2000, Australia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-primary" />
              <span>+61 2 1234 5678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-primary" />
              <span>contact@vitalsy.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>© {year} VitalSy Healthcare Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};
