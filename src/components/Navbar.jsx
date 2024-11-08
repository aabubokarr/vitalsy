import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="px-20 h-[70px] flex items-center justify-center border-b-[.5px] border-b-[#c4c4c4] top-0 sticky bg-[#FAF9F6]">
      <Link
        to="home"
        offset={-70}
        className="cursor-pointer poppins font-bold w-[60px] h-[60px] bg-[#0a0a0a] text-white flex items-center justify-center rounded-xl text-[24px]"
      >
        H
      </Link>
    </div>
  );
};
