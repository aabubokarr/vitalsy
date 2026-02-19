import { useState } from "react";
import emailjs from "emailjs-com";
import { contactInfo } from "../../data";

import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../ui/Button";

export const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_5t5wtvv",
        "template_f88utsl",
        formData,
        "0flq1J2VCRwLeq75D"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: "",
          });
          setStatus("success");
          setTimeout(() => setStatus(""), 5000);
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("error");
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <div id="contact" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden md:flex">
        <div
          className="bg-primary p-12 text-white md:w-1/3 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-6 opacity-90">We&apos;d love to hear from you. Fill out the form and we&apos;ll be in touch as soon as possible.</p>
          </div>
          <div className="space-y-4">
            <p className="opacity-80">{contactInfo.addressShort}</p>
            <p className="opacity-80">{contactInfo.phone}</p>
            <p className="opacity-80">{contactInfo.email}</p>
          </div>
        </div>

        <div className="p-12 md:w-2/3">
          <h2 className="text-2xl font-bold text-secondary mb-8">Send us a Message</h2>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  name="first_name"
                  onChange={handleChange}
                  type="text"
                  required
                  value={formData.first_name}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  name="last_name"
                  onChange={handleChange}
                  type="text"
                  required
                  value={formData.last_name}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  name="email"
                  onChange={handleChange}
                  type="email"
                  required
                  value={formData.email}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  name="phone"
                  onChange={handleChange}
                  type="tel"
                  required
                  value={formData.phone}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                value={formData.message}
              ></textarea>
            </div>

            <Button
              type="submit"
              disabled={status === "sending"}
              fullWidth={true}
              className={status === "sending" ? "bg-gray-400 cursor-not-allowed" : "shadow-lg"}
            >
              {status === "sending" ? (
                "Sending..."
              ) : status === "success" ? (
                <>Sent Successfully <CheckCircle size={20} /></>
              ) : status === "error" ? (
                <>Failed to Send <AlertCircle size={20} /></>
              ) : (
                <>Send Message <Send size={20} /></>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
