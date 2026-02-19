



import { services } from "../../data";

export const Services = () => {
    return (
        <div id="services" className="section-padding bg-white">
            <div className="text-center mb-12">
                <h2
                    className="text-primary font-semibold tracking-wide uppercase"
                >
                    Our Services
                </h2>
                <h1
                    className="text-4xl font-bold mt-2 text-secondary"
                >
                    Comprehensive Medical Care
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-8 bg-neutral rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
                    >
                        <div className="mb-4 p-4 bg-white rounded-full shadow-sm">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-secondary">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
