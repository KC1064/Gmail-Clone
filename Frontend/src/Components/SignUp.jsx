import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Sending data:", input);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/register",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if(res.data.success){
        navigate("/login");
        toast.success(res.data.message);
    }
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data); 
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#1E1F20] ">
      <div className="bg-[#0E0E0E] text-white flex w-[60%] h-[50%] justify-between rounded-3xl  items-center px-6">
        <div className="flex flex-col h-[30%] self-start">
          <img
            src="./google logo.png"
            alt="Google"
            className="h-12 w-12 mt-6"
          />
          <h1 className="text-[40px] mt-10 leading-none font-lato">
            Create a Gmail Account
          </h1>
          <p className="mt-2 font-lato">Enter your details</p>
        </div>
        <form onSubmit={submitHandler} className="flex flex-col gap-4 w-[48%]">
          <input
            onChange={changeHandler}
            value={input.fullname}  
            name="fullname"  
            type="text"
            placeholder="Full Name"
            className="h-10 bg-transparent text-white border-2 pl-2 rounded-lg"
          />
          <input
            onChange={changeHandler}
            value={input.email}
            name="email"
            type="email"
            placeholder="Email"
            className="h-10 bg-transparent text-white border-2 pl-2 rounded-lg"
          />
          <input
            onChange={changeHandler}
            value={input.password}
            name="password"
            type="password"
            placeholder="Password"
            className="h-10 bg-transparent text-white border-2 pl-2 rounded-lg"
          />
          <div className="text-black flex gap-3 items-center font-roboto">
            <p className="text-white text-xs">
              Already Have an Account?{" "}
              <span className="text-blue-400">
                <Link to={"/login"}>Click Here</Link>
              </span>
            </p>
            <button
              type="submit"
              className="bg-[#B7D0FB] h-[30px] w-[80px] rounded-2xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
