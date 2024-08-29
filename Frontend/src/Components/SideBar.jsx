import React from "react";
import { LuPencil } from "react-icons/lu";
import { MdInbox, MdOutlineStarBorder, MdOutlineWatchLater, MdOutlineDrafts, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

const SideBar = () => {
  const dispatch = useDispatch();

  const sidebar = [
    {
      icon: <MdInbox size={"20px"} />,
      text: "Inbox",
    },
    {
      icon: <MdOutlineStarBorder size={"20px"} />,
      text: "Starred",
    },
    {
      icon: <MdOutlineWatchLater size={"20px"} />,
      text: "Snoozed",
    },
    {
      icon: <TbSend2 size={"20px"} />,
      text: "Sent",
    },
    {
      icon: <MdOutlineDrafts size={"20px"} />,
      text: "Draft",
    },
    {
      icon: <MdOutlineKeyboardArrowDown size={"20px"} />,
      text: "More",
    },
  ];

  return (
    <div className="w-[18%] pt-3">
      <div className="w-[160px] bg-[#C2E7FF] flex justify-center items-center rounded-2xl gap-2 ml-3 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">
        <button
          onClick={() => dispatch(setOpen(true))}
          className="text-lg font-roboto flex justify-center items-center gap-3 w-[140px] h-[55px]"
        >
          <LuPencil size={"20px"} />
          <span>Compose</span>
        </button>
      </div>
      <div className="pt-3 flex flex-col gap-2">
        {sidebar.map((item, index) => (
          <div
            className="w-full flex justify-start items-center gap-4 hover:bg-gray-200 hover:rounded-r-full pl-7 py-1"
            key={index}
          >
            {item.icon}
            <p className="text-[16px] font-roboto font-[500]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
