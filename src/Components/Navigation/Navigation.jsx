import React from "react";
import { Routes, Route } from "react-router-dom";
import FindWork from "../../Pages/FindWork/FindWork";
import Order from "../../Pages/Order/Order";
import MyEarning from "../../Pages/MyEarning/MyEarning";
import Messages from "../../Pages/Messages/Messages";
import MyJobs from "../../Pages/MyJobs/MyJobs";
import Profile from "../../Pages/Profile/Profile";
import GigDetail from "../../Pages/GigDetail/GigDetail";
import PostJobs from "../../Pages/PostJobs/PostJobs";
import GigUpload from "../../Pages/GigUpload/GigUpload";

import Protected from "./Protected";
import AppLayout from "../AppLayout/AppLayout";
import FirstPage from "../../Pages/FirstPage";
import SecondPage from "../../Pages/SecondPage";
import ThirdPage from "../../Pages/ThirdPage";
import MessageLayout from "../MessageLayout/MessageLayout";
import YourOrders from "../../Pages/Yourorder";
import SignIn from "../signInForm/signIn";
import SignUp from "../SignUpForm/signUp";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp/>} />

        <Route element={<Protected />}>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<FindWork />} />
            <Route path="/myjobs" element={<MyJobs />} />
            <Route path="/order" element={<Order />} />
            <Route path="/myearning" element={<MyEarning />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/gigdetail/:gigId" element={<GigDetail />} />
            <Route path="/postjobs" element={<PostJobs />} />
            <Route path="/gigupload" element={<GigUpload />} />
            <Route path="/Yourorder" element={<YourOrders />} />
          </Route>
          <Route path="/messages/" element={<MessageLayout />}>
            <Route path="firstPage" element={<FirstPage />} />
            <Route path="secondPage" element={<SecondPage />} />
            <Route path="thirthPage" element={<ThirdPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Navigation;
