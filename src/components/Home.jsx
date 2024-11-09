import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center mt-[100px] m-auto w-[340px] md:w-full"
    >
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 0.4, delay: 0 }}
      >
        <img
          src="home.png"
          alt="doctor"
          className="w-[180px] h-[180px] rounded-[100px] mb-5"
        />
      </motion.div>
      <div className="flex items-center justify-center">
        <div>
          <motion.h1
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "linear", duration: 0.4, delay: 0.1 }}
            className="text-[12px] md:text-[18px]"
          >
            SYDNEY
          </motion.h1>
          <motion.h1
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "linear", duration: 0.4, delay: 0.2 }}
            className="text-[30px] md:text-[70px] xl:text-[80px] leading-none"
          >
            HEALTHCARE CLINIC
          </motion.h1>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "linear", duration: 0.4, delay: 0.3 }}
            className="text-[12px] md:text-[18px] text-center poppins"
          >
            YOUR PATH TO HEALTH, OUR COMMITMENT TO CARE
          </motion.p>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.4, delay: 0.4 }}
        >
          <Link
            to="calculator"
            offset={-70}
            className="w-[130px] h-[48px] cursor-pointer bg-[#298E9E] flex items-center justify-center text-white poppins font-medium rounded-lg"
          >
            Calculate BMI
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.4, delay: 0.5 }}
        >
          <Link
            to="contact"
            offset={-70}
            className="w-[130px] h-[48px] cursor-pointer bg-[#298E9E] flex items-center justify-center text-white poppins font-medium rounded-lg"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
