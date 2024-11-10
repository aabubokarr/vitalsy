import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="h-[70px] flex items-center justify-center gap-3 border-b-[.5px] border-b-[#c4c4c4] top-0 sticky bg-[#FAF9F6] z-10">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "linear", duration: 0.4, delay: 0.2 }}
        className="w-[80px]"
      >
        <Link to="calculator" offset={-70} className="flex flex-col items-end gap-[2px] cursor-pointer">
          <img
            src="calculator.png"
            alt="calculator"
            className="w-[30px]"
          />
          <h1 className="poppins">Calculator</h1>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "linear", duration: 0.4, delay: 0.1 }}
      >
        <Link
          to="home"
          offset={-70}
          className="cursor-pointer poppins font-bold w-[60px] h-[60px] bg-[#0a0a0a] text-white flex items-center justify-center rounded-xl text-[24px]"
        >
          H
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "linear", duration: 0.4, delay: 0.2 }}
        className="w-[80px]"
      >
        <Link to="contact" offset={-70} className="flex flex-col items-start gap-[2px] cursor-pointer">
          <img
            src="phone.png"
            alt="phone"
            className="w-[30px]"
          />
          <h1 className="poppins">Contact</h1>
        </Link>
      </motion.div>
    </div>
  );
};
