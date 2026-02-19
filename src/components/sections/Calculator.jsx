import { useState } from "react";

import { Calculator as CalcIcon } from "lucide-react";
import { Button } from "../ui/Button";

export const Calculator = () => {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
  });
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [bgColor, setBgColor] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setBmi(null);
    setCategory("");
    setBgColor("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.weight && formData.height) {
      const weight = parseFloat(formData.weight);
      const height = parseFloat(formData.height);

      if (height > 0) {
        const calculatedBmi = weight / (height * height);
        setBmi(calculatedBmi.toFixed(1));

        if (calculatedBmi < 18.5) {
          setCategory("Underweight");
          setBgColor("bg-blue-400");
        } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
          setCategory("Normal Weight");
          setBgColor("bg-green-500");
        } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
          setCategory("Overweight");
          setBgColor("bg-yellow-400");
        } else {
          setCategory("Obesity");
          setBgColor("bg-red-500");
        }
      }
    }
  };

  return (
    <div id="calculator" className="section-padding bg-neutral">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-primary font-semibold tracking-wide uppercase"
          >
            Health Tools
          </h2>
          <h1
            className="text-4xl font-bold mt-2 text-secondary"
          >
            BMI Calculator
          </h1>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden md:flex">
          <div
            className="p-8 md:w-1/2 bg-primary text-white flex flex-col justify-center items-center text-center"
          >
            <CalcIcon size={64} className="mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">Calculate Your Body Mass Index</h3>
            <p className="opacity-90">
              BMI is a useful screening tool that can estimate whether a person is underweight, healthy weight, overweight, or obese.
            </p>
          </div>

          <div className="p-8 md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="e.g. 70"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Height (meters)</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="e.g. 1.75"
                  step="0.01"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="secondary"
                fullWidth={true}
                className="shadow-lg"
              >
                Calculate Now
              </Button>
            </form>

            {bmi && (
              <div
                className={`mt-6 p-4 rounded-xl text-white text-center shadow-lg ${bgColor}`}
              >
                <p className="text-sm opacity-90 uppercase tracking-wide font-semibold">Your BMI Score</p>
                <h2 className="text-3xl font-bold my-1">{bmi}</h2>
                <p className="font-medium">{category}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
