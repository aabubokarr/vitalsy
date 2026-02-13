import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const About = () => {
    return (
        <div id="about" className="section-padding bg-white">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <img
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop"
                        alt="Medical Team"
                        className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <h2 className="text-primary font-semibold tracking-wide uppercase mb-2">About Us</h2>
                    <h1 className="text-4xl font-bold text-secondary mb-6">Dedicated to Your Well-being</h1>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        At Sydney Healthcare Clinic, we believe in a holistic approach to medicine. Our team of experienced professionals is dedicated to providing personalized care that addresses not just your symptoms, but your overall health and lifestyle.
                    </p>

                    <div className="space-y-4">
                        {[
                            "Experienced Specialist Doctors",
                            "Advanced Diagnostic Technology",
                            "Personalized Treatment Plans",
                            "24/7 Patient Support"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle className="text-primary" size={20} />
                                <span className="text-secondary font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
