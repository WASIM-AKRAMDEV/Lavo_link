import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet  />
      <Footer />
    </div>
  );
};

export default AppLayout;
