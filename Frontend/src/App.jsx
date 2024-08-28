import React from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Mail from "./Components/Mail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inbox from "./Components/Inbox";

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
  },
]);

const App = () => {
  return (
    <div className="bg-[#f6f8fc] h-screen">
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
