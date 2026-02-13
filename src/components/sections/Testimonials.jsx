import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Emily Thompson",
        role: "Patient",
        content: "The care I received was exceptional. The doctors were attentive and the staff made me feel right at home.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Patient",
        content: "State-of-the-art facilities and a very professional team. I highly recommend this clinic to everyone.",
        rating: 5,
    },
    {
        name: "Sarah Jenkins",
        role: "Mother",
        content: "My children actually enjoy coming here! The pediatric team is wonderful and patient.",
        rating: 5,
    },
];

export const Testimonials = () => {
    return (
        <div id="testimonials" className="section-padding bg-neutral">
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-primary font-semibold tracking-wide uppercase"
                >
                    Testimonials
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-bold mt-2 text-secondary"
                >
                    What Our Patients Say
                </motion.h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-sm relative border border-gray-100"
                    >
                        <Quote className="absolute top-8 right-8 text-gray-100" size={40} />
                        <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-6 relative z-10">"{testimonial.content}"</p>
                        <div>
                            <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                            <span className="text-sm text-gray-400">{testimonial.role}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
