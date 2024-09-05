import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",  // Correct field binding
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
        "http://localhost:3000/api/v1/user/login", 
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
      console.log(res.data);
    } catch (error) {
      if (error.response && error.response.data) {
        console.error(error.response.data.message); 
        toast.error(error.response.data.message);  
      } else {
        console.error(error.message);  
        toast.error("An error occurred. Please try again.");
      }
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
            Login In To The Account
          </h1>
          <p className="mt-2 font-lato">Enter your credentials</p>
        </div>
        <form onSubmit={submitHandler} className="flex flex-col gap-4 w-[48%]">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={changeHandler}
            className="h-10 bg-transparent text-white border-2 pl-2 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}  
            onChange={changeHandler}
            className="h-10 bg-transparent text-white border-2 pl-2 rounded-lg"
          />
          <div className="text-black flex gap-3 items-center font-roboto justify-between">
            <p className="text-white text-xs">
              Don't Have an Account?{" "}
              <span className="text-blue-400">
                <Link to={"/signup"}>Click Here</Link>
              </span>
            </p>
            <button type="submit" className="bg-[#B7D0FB] h-[30px] w-[80px] rounded-2xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
