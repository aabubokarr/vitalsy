import React from "react";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div id="home" className="home flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div>
          <h1 className="text-[18px]">SYDNEY</h1>
          <h1 className="text-[80px] leading-none">HEALTHCARE CLINIC</h1>
          <p className="text-[18px] text-center poppins">
            YOUR PATH TO HEALTH, OUR COMMITMENT TO CARE
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <Link
          to="calculator"
          offset={-70}
          className="w-[130px] h-[48px] cursor-pointer bg-[#298E9E] flex items-center justify-center text-white poppins font-medium rounded-lg"
        >
          Calculate BMI
        </Link>
        <Link
          to="contact"
          offset={-70}
          className="w-[130px] h-[48px] cursor-pointer bg-[#298E9E] flex items-center justify-center text-white poppins font-medium rounded-lg"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};
