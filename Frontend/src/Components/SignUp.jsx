import React from "react";

const SignUp = () => {
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
        <form action="" className="flex flex-col gap-4 w-[48%]">
          <input
            type="text"
            placeholder="Username"
            className="h-10 bg-transparent text-white border-2 pl-2 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="h-10 bg-transparent text-white border-2 pl-2 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-10 bg-transparent text-white border-2 pl-2 rounded-lg"
          />
          <div className="text-black flex gap-3 items-center font-roboto">
            <p className="text-white text-xs">Already Have an Account? <span className="text-blue-400">Click Here</span></p>
            <button className="bg-[#B7D0FB] h-[30px] w-[80px] rounded-2xl">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
