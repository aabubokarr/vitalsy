import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Heart, Activity, Brain, UserPlus, Microscope } from "lucide-react";

const services = [
    {
        icon: <Stethoscope size={40} className="text-primary" />,
        title: "General Checkup",
        description: "Comprehensive health assessments to keep you in top shape.",
    },
    {
        icon: <Heart size={40} className="text-primary" />,
        title: "Cardiology",
        description: "Expert care for your heart with advanced diagnostic tools.",
    },
    {
        icon: <Activity size={40} className="text-primary" />,
        title: "Emergency Care",
        description: "24/7 emergency services for critical health situations.",
    },
    {
        icon: <Brain size={40} className="text-primary" />,
        title: "Neurology",
        description: "Specialized treatment for disorders of the nervous system.",
    },
    {
        icon: <UserPlus size={40} className="text-primary" />,
        title: "Pediatrics",
        description: "Compassionate care for infants, children, and adolescents.",
    },
    {
        icon: <Microscope size={40} className="text-primary" />,
        title: "Laboratory",
        description: "Accurate and timely lab tests to support your diagnosis.",
    },
];

export const Services = () => {
    return (
        <div id="services" className="section-padding bg-white">
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-primary font-semibold tracking-wide uppercase"
                >
                    Our Services
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-bold mt-2 text-secondary"
                >
                    Comprehensive Medical Care
                </motion.h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-8 bg-neutral rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
                    >
                        <div className="mb-4 p-4 bg-white rounded-full shadow-sm">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-secondary">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
