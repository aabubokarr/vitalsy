

import { Star, Quote } from "lucide-react";

import { testimonials } from "../../data";

export const Testimonials = () => {
    return (
        <div id="testimonials" className="section-padding bg-neutral">
            <div className="text-center mb-12">
                <h2
                    className="text-primary font-semibold tracking-wide uppercase"
                >
                    Testimonials
                </h2>
                <h1
                    className="text-4xl font-bold mt-2 text-secondary"
                >
                    What Our Patients Say
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-sm relative border border-gray-100"
                    >
                        <Quote className="absolute top-8 right-8 text-gray-100" size={40} />
                        <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-6 relative z-10">&quot;{testimonial.content}&quot;</p>
                        <div>
                            <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                            <span className="text-sm text-gray-500">{testimonial.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
