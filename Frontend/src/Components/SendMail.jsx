import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";

const SendMail = () => {
  // Corrected the useSelector to properly access the open state
  const open = useSelector((store) => store.app.open);

  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } w-[450px] bg-white shadow-xl shadow-slate-300`}
    >
      <div className="flex justify-between items-center rounded-t-xl bg-[#F2F6FB] py-1 px-2">
        <div className="py-1">New Message</div>
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              setClicked(!clicked);
            }}
            className="flex items-center w-full" 
          >
            <div
              className={`w-3 h-[2px] cursor-pointer bg-black flex flex-col ${
                clicked ? "self-start" : "self-end"
              }`}
            ></div>
          </button>
          <RxCross2
            className="cursor-pointer"
            onClick={() => dispatch(setOpen(false))}
          />
        </div>
      </div>
      <form action="" className={`${clicked ? "hidden":"flex flex-col"}`}>
        <input
          type="text"
          placeholder="Recipients"
          className="py-1 px-2 outline-none border-b-2 border-gray-300"
        />
        <input
          type="text"
          placeholder="Subject"
          className="py-1 px-2 outline-none border-b-2 border-gray-300"
        />
        <textarea
          cols={50}
          rows={13}
          placeholder="Enter the Message"
          className="outline-none pt-2 pl-2"
        ></textarea>
      </form>
    </div>
  );
};

export default SendMail;

{
  /* <div ">
        <
        <RxCross2 />
      </div> */
}
<div className="cursor-pointer" onClick={() => dispatch(setOpen(false))}>
  <RxCross2 />
</div>;
