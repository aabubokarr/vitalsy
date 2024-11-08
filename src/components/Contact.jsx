import React from "react";

export const Contact = () => {
  const handleChange = (e) => {};
  return (
    <div id="contact" className="mt-[200px] mb-[100px] w-[700px] m-auto">
      <h1 className="text-center poppins font-bold text-[50px]">Contact Us</h1>
      <form className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
            <label htmlFor="first_name" className="poppins">
              First Name
            </label>
            <input
              className="h-[48px] px-3 focus:outline-none border-[1px] border-[#c4c4c4] rounded-lg"
              name="first_name"
              onChange={handleChange}
              type="text"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
            <label htmlFor="last_name" className="poppins">
              Last Name
            </label>
            <input
              className="h-[48px] px-3 focus:outline-none border-[1px] border-[#c4c4c4] rounded-lg"
              name="last_name"
              onChange={handleChange}
              type="text"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
            <label htmlFor="email" className="poppins">
              Email
            </label>
            <input
              className="h-[48px] px-3 focus:outline-none border-[1px] border-[#c4c4c4] rounded-lg"
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
            <label htmlFor="phone" className="poppins">
              Phone No
            </label>
            <input
              className="h-[48px] px-3 focus:outline-none border-[1px] border-[#c4c4c4] rounded-lg"
              name="phone"
              onChange={handleChange}
              type="number"
              placeholder="Enter your phone no"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
          <label htmlFor="message" className="poppins">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            cols="10"
            rows="5"
            className="p-3 focus:outline-none border-[1px] border-[#c4c4c4] rounded-lg"
          ></textarea>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="check"
            required
            className="cursor-pointer accent-[#009BA9]"
          />
          <label htmlFor="check" className="poppins text-[16px]">
            I agree with the Terms and Conditions
          </label>
        </div>
        <button
          type="submit"
          className="w-full h-[48px] cursor-pointer bg-[#298E9E] flex items-center justify-center text-white poppins font-medium rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
