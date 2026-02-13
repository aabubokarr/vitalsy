import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "../ui/Button";

export const Home = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-primary rounded-full mb-6">
            <Activity size={18} />
            <span className="text-sm font-semibold tracking-wide">PREMIER HEALTHCARE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-secondary leading-tight mb-6">
            Your Health, <br />
            <span className="text-primary">Our Priority</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            Experience world-class medical care with a personal touch. We are committed to your well-being through every stage of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="contact" smooth={true} offset={-100}>
              <Button>
                Book Appointment <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="services" smooth={true} offset={-100}>
              <Button variant="outline">
                Explore Services
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 md:mt-0"
        >
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary mb-3">
                  <Activity size={24} />
                </div>
                <h3 className="font-bold text-2xl text-secondary">20+</h3>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div className="bg-primary p-6 rounded-2xl shadow-lg text-white flex flex-col items-center text-center">
                <h3 className="font-bold text-2xl">15k+</h3>
                <p className="text-blue-100 text-sm">Happy Patients</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-secondary p-6 rounded-2xl shadow-lg text-white flex flex-col items-center text-center">
                <h3 className="font-bold text-2xl">50+</h3>
                <p className="text-gray-400 text-sm">Specialist Doctors</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-3">
                  <Activity size={24} />
                </div>
                <h3 className="font-bold text-2xl text-secondary">24/7</h3>
                <p className="text-gray-500 text-sm">Emergency Care</p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-teal-100/50 blur-3xl rounded-full -z-10"></div>
        </motion.div>
      </div>
    </div>
  );
};
