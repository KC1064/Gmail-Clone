import React from "react";
import { FaRegSquare } from "react-icons/fa";
import { MdOutlineStarOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate();

  const openMail = () => {
    navigate("/mail/1234");
  };
  return (
    <div
      onClick={openMail}
      role="button"
      className="flex items-center justify-between px-3 py-2 border-b-2 border-gray-300 hover:shadow-lg hover:cursor-pointer"
    >
      <div className="flex items-center gap-2 text-gray-300">
        <FaRegSquare size={"18px"} className="cursor-pointer" />
        <MdOutlineStarOutline size={"22px"} className="cursor-pointer" />
        <p className="text-black font-semibold">Kironmay</p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, facilis
          officia eveniet modi neque quasi?
        </p>
      </div>
      <div>
        <p>25 Aug</p>
      </div>
    </div>
  );
};

export default Email;
