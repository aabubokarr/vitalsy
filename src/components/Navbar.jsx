import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="px-20 h-[70px] flex items-center justify-center border-b-[.5px] border-b-[#c4c4c4] top-0 sticky bg-[#FAF9F6] z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "linear", duration: 0.4, delay: 0 }}
      >
        <Link
          to="home"
          offset={-70}
          className="cursor-pointer poppins font-bold w-[60px] h-[60px] bg-[#0a0a0a] text-white flex items-center justify-center rounded-xl text-[24px]"
        >
          H
        </Link>
      </motion.div>
    </div>
  );
};
