import React from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Mail from "./Components/Mail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inbox from "./Components/Inbox";
import SendMail from "./Components/SendMail";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Toaster } from 'react-hot-toast';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/mail/:id",
        element: <Mail />,
      },
      {
        path: "/",
        element: <Inbox />,
      },
    ],
  },{
    path:"/login",
    element:<Login />,
  },{
    path: "/signup",
    element: <SignUp />
  }
]);

const App = () => {
  return (
    <div className="bg-[#f6f8fc] h-screen">
      <Navbar />
      <RouterProvider router={appRouter} />
      <div className="absolute w-[30%] bottom-6 right-28 z-10">
        <SendMail />
      </div>
      <Toaster />
    </div>
  );
};

export default App;
