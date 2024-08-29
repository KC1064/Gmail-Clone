import React, { useState } from "react";
import { FaRegSquare } from "react-icons/fa6";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoMdRefresh } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineDrafts,
} from "react-icons/md";
import { LuTag } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import Emails_Page from "./Emails_Page";

const Inbox = () => {
  const titles = [
    {
      icon: <MdOutlineDrafts size={"20px"} title="Primary" />,
      text: "Primary",
    },
    {
      icon: <LuTag size={"20px"} title="Promotions" />,
      text: "Promotions",
    },
    {
      icon: <LuUsers2 size={"20px"} title="Social" />,
      text: "Social",
    },
  ];

  const [selected, isSelected] = useState(0);

  return (
    <div className="bg-white flex-1 mr-4 mt-2 rounded-3xl h-[590px] overflow-y-auto">
      <div className="flex justify-between items-center border-b-2 border-gray-200">
        <div className="flex gap-4 mx-6 my-4 items-center">
          <div className="flex">
            <FaRegSquare />
            <RiArrowDownSFill />
          </div>
          <IoMdRefresh size={"20px"} />
          <HiDotsVertical size={"20px"} />
        </div>
        <div className="flex gap-2 mr-6 items-center">
          <p className="text-sm">1 to 50 of 12000</p>
          <MdOutlineKeyboardArrowLeft size={"20px"} />
          <MdOutlineKeyboardArrowRight size={"20px"} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        {titles.map((item, index) => {
          return (
            <div className="w-[220px] flex justify-center hover:bg-gray-300">
              <div
                className={`${
                  selected === index
                    ? "border-b-4 border-blue-600 text-blue-600"
                    : "text-black"
                } 
                w-[200px] flex items-center gap-6  py-4 px-4`}
                key={index}
                onClick={() => {
                  isSelected(index);
                }}
              >
                {item.icon}
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Emails_Page />
    </div>
  );
};

export default Inbox;
