import React from "react";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Inbox from "./Components/Inbox";

const App = () => {
  return (
    <div className="bg-[#f6f8fc] h-screen">
      <Navbar />
      <div className="flex gap-3">
        <SideBar />
        <Inbox />
      </div>
    </div>
  );
};

export default App;
