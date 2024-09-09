import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const user = false;
  const {user} = useSelector(store => store.app);

  return user ? (
    <>
      <div className="flex items-center pt-1 gap-10">
        <div className="flex items-center p-1 w-[238px]">
          <div className="flex justify-center items-center">
            <div className="h-[48px] w-[48px] flex justify-center items-center hover:bg-gray-200 hover:rounded-full p-1">
              <RxHamburgerMenu size={"24px"} className="pt-1" />
            </div>
            <div className="w-[110px] flex justify-center items-center pt-1">
              <img
                src="src/assets/Gmail_Logo_32px.png"
                alt="gmail-logo"
                className="h-[24px] w-auto pr-2 text-sm text-gray-400"
              />
              <span className="text-2xl text-black">Gmail</span>
            </div>
          </div>
        </div>
        <div className="w-[760px] flex items-center bg-[#EAF1FB] rounded-full focus-within:bg-white focus-within:shadow-md focus-within:shadow-gray-400 transition-all duration-200 ease-in-out">
          <div className="flex h-[46px] w-[720px] items-center">
            <div className="h-[46px] w-[46px] flex items-center justify-center hover:bg-gray-200 hover:rounded-full">
              <IoIosSearch size={"24px"} />
            </div>
            <input
              type="text"
              className="w-full bg-transparent pl-2 text-lg focus:outline-none border-none"
              placeholder="Search mail"
            />
          </div>
        </div>
        <div className="flex items-center ml-36 gap-3">
          <div className="h-[30px] w-[30px] flex items-center justify-center hover:bg-gray-200 hover:rounded-full">
            <MdOutlineContactSupport size={"24px"} />
          </div>
          <div className="h-[30px] w-[30px] flex items-center justify-center hover:bg-gray-200 hover:rounded-full">
            <TbGridDots size={"24px"} />
          </div>
          <div className="h-[30px] w-[30px] flex items-center justify-center hover:bg-gray-200 hover:rounded-full">
            <MdOutlineSettings size={"24px"} />
          </div>
          <div className="pr-6">
            <Avatar
            src={user.profilePhoto}
              alt="user-avatar"
              size="40"
              round = {true}
             />
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Navbar;
