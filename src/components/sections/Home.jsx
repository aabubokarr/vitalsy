

import { ArrowRight, Activity } from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "../ui/Button";
import { heroData, stats } from "../../data";

export const Home = () => {
  return (
    <div id="home" className="min-h-screen md:h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20 pb-12 md:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div
          className="text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-primary rounded-full mb-6">
            <Activity size={18} />
            <span className="text-sm font-semibold tracking-wide">{heroData.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary leading-tight mb-6">
            {heroData.title} <br />
            <span className="text-primary">{heroData.highlight}</span>
          </h1>
          <p className="text-gray-600 text-base md:text-xl mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            {heroData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="contact" smooth={true} offset={-100}>
              <Button>
                {heroData.primaryAction} <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="services" smooth={true} offset={-100}>
              <Button variant="outline">
                {heroData.secondaryAction}
              </Button>
            </Link>
          </div>
        </div>

        <div
          className="relative mt-12 md:mt-0"
        >
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-8">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className={`${index === 1 ? "bg-primary text-white" : "bg-white text-secondary border border-gray-100 hover:shadow-xl"} p-6 rounded-2xl shadow-lg transition-shadow flex flex-col items-center text-center`}>
                  {stat.icon && (
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary mb-3">
                      <stat.icon size={24} />
                    </div>
                  )}
                  <h3 className="font-bold text-2xl">{stat.value}</h3>
                  <p className={`text-sm ${index === 1 ? "text-blue-100" : "text-gray-500"}`}>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {stats.slice(2, 4).map((stat, index) => (
                <div key={index} className={`${index === 0 ? "bg-secondary text-white" : "bg-white text-secondary border border-gray-100 hover:shadow-xl"} p-6 rounded-2xl shadow-lg transition-shadow flex flex-col items-center text-center`}>
                  {stat.icon && (
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-3">
                      <stat.icon size={24} />
                    </div>
                  )}
                  <h3 className="font-bold text-2xl">{stat.value}</h3>
                  <p className={`text-sm ${index === 0 ? "text-gray-400" : "text-gray-500"}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-teal-100/50 blur-3xl rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  );
};
