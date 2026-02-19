import { Mail, Phone, MapPin } from "lucide-react";
import { companyName, contactInfo, socialLinks, footerLinks, footerServices } from "../data";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">{companyName.charAt(0)}</div>
            <span className="font-bold text-xl tracking-tight">{companyName}</span>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Providing world-class healthcare with a personal touch. Your health is our priority.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name} page`}
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors group"
              >
                <social.icon size={20} className="text-white group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-400">
            {footerLinks.map((link, index) => (
              <li key={index}><a href={link.href} className="hover:text-primary transition-colors">{link.name}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Services</h3>
          <ul className="space-y-4 text-gray-400">
            {footerServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Contact Info</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-primary mt-1" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-primary" />
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-primary" />
              <span>{contactInfo.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>Copyright © {year} {companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
};
