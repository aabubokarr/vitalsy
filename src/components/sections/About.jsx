

import { CheckCircle } from "lucide-react";

import { aboutData } from "../../data";

export const About = () => {
    return (
        <div id="about" className="section-padding bg-white">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div
                    className="flex-1"
                >
                    <img
                        src={aboutData.image}
                        alt="Medical Team"
                        loading="lazy"
                        width="800"
                        height="600"
                        className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
                    />
                </div>

                <div
                    className="flex-1"
                >
                    <h2 className="text-primary font-semibold tracking-wide uppercase mb-2">{aboutData.subtitle}</h2>
                    <h1 className="text-4xl font-bold text-secondary mb-6">{aboutData.title}</h1>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {aboutData.description}
                    </p>

                    <div className="space-y-4">
                        {aboutData.features.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle className="text-primary" size={20} />
                                <span className="text-secondary font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
