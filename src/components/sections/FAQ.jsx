import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Do I need an appointment?",
        answer: "While we welcome walk-ins for emergencies, we highly recommend booking an appointment for general checkups to avoid waiting times.",
    },
    {
        question: "What insurance plans do you accept?",
        answer: "We accept most major insurance plans. Please contact our front desk for a specific list of covered providers.",
    },
    {
        question: "Are your services available on weekends?",
        answer: "Yes, we are open on Saturdays from 9 AM to 5 PM. Sundays are reserved for emergency services only.",
    },
    {
        question: "How can I get my test results?",
        answer: "Test results are typically available within 24-48 hours. You can access them through our online patient portal or pick them up in person.",
    },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="faq" className="section-padding bg-neutral">
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-primary font-semibold tracking-wide uppercase"
                >
                    FAQ
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-bold mt-2 text-secondary"
                >
                    Frequently Asked Questions
                </motion.h1>
            </div>

            <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="mb-4"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-left"
                        >
                            <span className="font-semibold text-secondary text-lg">{faq.question}</span>
                            {openIndex === index ? (
                                <Minus className="text-primary" size={20} />
                            ) : (
                                <Plus className="text-primary" size={20} />
                            )}
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-2 text-gray-600 bg-white rounded-b-xl border-t border-gray-50 mx-2">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
