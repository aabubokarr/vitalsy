import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="py-10 bg-[#0a0a0a] text-white flex flex-col items-center gap-3">
      <div className="cursor-pointer poppins font-bold w-[60px] h-[60px] bg-[#FAF9F6] text-black flex items-center justify-center rounded-xl text-[24px]">
        H
      </div>
      <p className="poppins">© {year} Healthcare Clinic. All rights reserved</p>
    </div>
  );
};
