import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen, setEmails } from "../redux/appSlice";
import toast from "react-hot-toast";
import axios from "axios";

const SendMail = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const { open, emails } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [clicked, setClicked] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setClicked(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/email/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(setEmails([...emails, res.data.email]));
      toast.success("Email sent successfully!");
      console.log(formData);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setClicked(false);
      dispatch(setOpen(false));
    }
  };

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } w-[450px] bg-white shadow-xl shadow-slate-300`}
    >
      <div className="flex justify-between items-center rounded-t-xl bg-[#F2F6FB] py-1 px-3">
        <div className="py-1">New Message</div>
        <div className="flex gap-3">
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
          <div className="w-3">
            <RxCross2
              className="cursor-pointer"
              onClick={() => dispatch(setOpen(false))}
            />
          </div>
        </div>
      </div>
      <form
        onSubmit={submitHandler}
        className={`${clicked ? "hidden" : "flex flex-col"}`}
      >
        <input
          type="text"
          name="to"
          value={formData.to}
          onChange={changeHandler}
          placeholder="Recipients"
          className="py-1 px-2 outline-none border-b-2 border-gray-300"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={changeHandler}
          placeholder="Subject"
          className="py-1 px-2 outline-none border-b-2 border-gray-300"
        />
        <textarea
          name="message"
          cols={50}
          rows={13}
          value={formData.message}
          onChange={changeHandler}
          placeholder="Enter the Message"
          className="outline-none pt-2 pl-2"
        ></textarea>
        <button
          type="submit"
          className="h-auto w-[80px] mb-2 ml-2 bg-blue-500 text-white px-4 py-1 rounded-2xl"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
