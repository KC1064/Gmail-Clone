import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className="h-16 w-full flex items-center pt-1 gap-10">
      <div className="flex items-center p-1 w-[238px]">
        <div className="flex justify-center items-center">
          <div className="h-[48px] w-[48px] flex justify-center items-center hover:bg-gray-200 hover:rounded-full p-1">
            <RxHamburgerMenu size={"24px"} className="pt-1" />
          </div>
          <div className="h-[40px] w-[110px] flex justify-center items-center pt-1">
            <img
              src="src\assets\Gmail_Logo_32px.png"
              alt="gmail-logo"
              className="h-[24px] w-auto pr-2 text-sm text-gray-400"
            />
            <span className="text-2xl text-black">Gmail</span>
          </div>
        </div>
      </div>
      <div className="w-[760px] h-[48px] flex items-center bg-[#EAF1FB] rounded-full focus-within:bg-white focus-within:shadow-md focus-within:shadow-gray-400 transition-all duration-200 ease-in-out">
        <div className="flex h-[46px] w-[720px] items-center">
          <div className=" h-[46px] w-[46px] flex items-center justify-center hover:bg-gray-200 hover:rounded-full">
            <IoIosSearch size={"24px"} />
          </div>
          <input
            type="text"
            className="w-full bg-transparent pl-2 text-lg focus:outline-none border-none"
            placeholder="Search mail"
          />
        </div>
      </div>
      <div className="flex items-center pl-4 gap-3">
        <div className="h-[30px] w-[30px] flex items-center justify-center  hover:bg-gray-200 hover:rounded-full">
          <MdOutlineContactSupport size={"24px"} />
        </div>
        <div className="h-[30px] w-[30px] flex items-center justify-center  hover:bg-gray-200 hover:rounded-full">
          <TbGridDots size={"24px"} />
        </div>
        <div className="h-[30px] w-[30px] flex items-center justify-center  hover:bg-gray-200 hover:rounded-full">
          <MdOutlineSettings size={"24px"} />
        </div>
        <div className="pr-6">
          <Avatar
            src="data:image/jpeg;base64,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"
            size="45"
            round={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
