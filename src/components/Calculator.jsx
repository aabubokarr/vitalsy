import React, { useState } from "react";

export const Calculator = () => {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
  });
  const [bmi, setBmi] = useState(null);
  const [bgColor, setBgColor] = useState("");
  const [category, setCategory] = useState("");

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
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);

    if (height > 0) {
      const calculatedBmi = weight / (height * height);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setCategory("Underweight");
        setBgColor("#3EB3F2");
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setCategory("Normal");
        setBgColor("#42B127");
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        setCategory("Overweight");
        setBgColor("#FEB50D");
      } else if (calculatedBmi >= 30 && calculatedBmi < 34.9) {
        setCategory("Obese");
        setBgColor("#FE3F32");
      } else {
        setCategory("Extremely Obese");
        setBgColor("#D60601");
      }
    } else {
      alert("Height must be greater than 0");
    }
  };

  return (
    <div id="calculator" className="w-[500px] m-auto poppins">
      <h1 className="text-center poppins font-bold text-[50px]">BMI Calculator</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
          <label htmlFor="weight" className="poppins">
            Weight (kg)
          </label>
          <input
            className="h-[48px] px-3 focus:outline-none border-[1px] border-[#c4c4c4] rounded-lg"
            name="weight"
            onChange={handleChange}
            type="number"
            step="0.01"
            placeholder="Weight (kg)"
            required
          />
        </div>
        <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
          <label htmlFor="height" className="poppins">
            Height (m)
          </label>
          <input
            className="h-[48px] px-3 focus:outline-none border-[1px] border-[#c4c4c4] rounded-lg"
            name="height"
            onChange={handleChange}
            type="number"
            step="0.01"
            placeholder="Height (m)"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full h-[48px] cursor-pointer bg-[#298E9E] flex items-center justify-center text-white poppins font-medium rounded-lg"
        >
          Calculate BMI
        </button>
      </form>
      {bmi !== null && (
        <div
          className="mt-3 rounded-lg flex items-center justify-center h-10 text-white"
          style={{ backgroundColor: bgColor }}
        >
          <h2 className="poppins">
            Your BMI is {bmi.toFixed(2)} - {category}
          </h2>
        </div>
      )}
    </div>
  );
};
