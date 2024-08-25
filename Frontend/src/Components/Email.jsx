import React from "react";
import { FaRegSquare } from "react-icons/fa";
import { MdOutlineStarOutline } from "react-icons/md";

const Email = () => {
  return (
    <div className="flex items-center justify-between px-3 py-2 border-b-2 border-gray-300">
      <div className="flex items-center gap-2 text-gray-300">
        <FaRegSquare size={"18px"} className="cursor-pointer"/>
        <MdOutlineStarOutline size={"22px"} className="cursor-pointer"/>
        <p className="text-black font-semibold">Kironmay</p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, facilis officia eveniet modi neque quasi?
        </p>
      </div>
      <div>
        <p>25 Aug</p>
      </div>
    </div>
  );
};

export default Email;
