import React from "react";
import { Outlet } from "react-router-dom";
import Message from "../chatmessage/message";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MessageLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-[75%] mt-8 max-xl:w-[60%]">
          <Outlet />
        </div>
        <div className="w-[25%]">
          <Message />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MessageLayout;
