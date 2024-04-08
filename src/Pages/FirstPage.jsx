import React from "react";
import { IoIosLink } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";

const FirstPage = () => {
  return (
    <div className="pl-20  overflow-hidden">
      <div className=" h-32 rounded-2xl  flex items-center mt-4 cursor-pointer  ">
        <div className="w-14 pl-4">
          <img className="w-full" src="../assets/images/user(1).png" alt="" />
        </div>
        <div className="pl-5">
          <p className=" capitalize text-[#151d48] ">on demand learning</p>
          <p className=" capitalize text-[#151d48] text-sm ">hi shahzad</p>
        </div>
      </div>
      <p className="w-[800px] text-[13px] p-10 bg-[#f0f0f0] ">
        Welcome to Lavolink! We're excited to have you join our platform. To
        ensure you navigate the world of freelancing successfully, we've created
        a range of resources tailored just for you. Explore Lavolink Academy,
        where you'll discover a variety of on-demand learning paths and courses
        designed to fit your schedule. Dive deeper into our Education
        Marketplace, a special collaboration between Lavolink Academy and
        renowned brands offering carefully curated courses and resources. Are
        you maximizing your profile? Our "New to Lavolink: Getting Started"
        learning path covers everything you need to know about setting up your
        Lavolink profile. We also provide interactive courses to guide you
        through creating an engaging profile, building your portfolio, and
        setting your rates. Ready to kickstart your journey on Lavolink?
      </p>
      <div className="flex bg-[#f0f0f0] w-[80%] ml-10  px-4 py-4 rounded-2xl item-center mt-40 shadow-[0 0 10px] to-black relative ">
        <input
          className=" bg-transparent text-[13px] pl-2 outline-none w-full capitalize "
          type="text"
          placeholder="can,t send a messages in archived room"
        />
        <div className=" text-[18px] flex absolute right-0 pr-10 ">
          <div className="pr-2">
            <IoIosLink />
          </div>
          <IoCameraOutline />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
