import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqs } from "../../data";

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="faq" className="section-padding bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2
                        className="text-primary font-semibold tracking-wide uppercase mb-3"
                    >
                        FAQ
                    </h2>
                    <h1
                        className="text-3xl md:text-4xl font-bold text-secondary"
                    >
                        Common Questions
                    </h1>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-gray-200 rounded-2xl overflow-hidden ${openIndex === index ? "bg-gray-50 border-gray-300" : "bg-white"
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-bold ${openIndex === index ? "text-primary" : "text-secondary"
                                    }`}>
                                    {faq.question}
                                </span>
                                <span
                                    style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    className={`p-2 rounded-full ${openIndex === index ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                                        }`}
                                >
                                    <ChevronDown size={20} />
                                </span>
                            </button>
                            {openIndex === index && (
                                <div
                                    className="px-6 pb-6 text-gray-600 leading-relaxed"
                                >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
