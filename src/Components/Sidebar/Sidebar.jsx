import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { VscLink } from "react-icons/vsc";
import { RiShieldStarLine } from "react-icons/ri";
import { SlNotebook } from "react-icons/sl";

const Sidebar = () => {
  return (
    <div className="w-[345px]">
      <div className="bg-[#f9fafb] p-10 rounded-[19px] h-[246px] flex flex-col justify-between">
        <div className="flex gap-3 items-center">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-[#151D48]">Shahzad</h3>
            <p className="text-base">Blockchain Developer</p>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-[#737791] text-xl" />
              <p className="text-sm text-[#737791]">From</p>
            </div>
            <p className="text-[#737791] text-sm">United State</p>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2">
              <IoPersonCircleSharp className="text-[#737791] text-xl" />
              <p className="text-sm text-[#737791]">Member Since</p>
            </div>
            <p className="text-[#737791] text-sm">Mar, 2024</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] px-10 py-4 rounded-[19px] mt-3">
        <ul className="p-0">
          <li className="text-sm text-[#737791] flex items-center gap-2 my-3">
            Lavolink Academy <VscLink className="text-lg text-[#737791]" />
          </li>
          <li className="text-sm text-[#737791] flex items-center gap-2 my-3">
            Offer Contract
            <VscLink className="text-lg text-[#737791]" />
          </li>
          <li className="text-sm text-[#737791] flex items-center gap-2 my-3">
            Get Paid <VscLink className="text-lg text-[#737791]" />
          </li>
          <li className="text-sm text-[#737791] flex items-center gap-2 my-3">
            Help Center <VscLink className="text-lg text-[#737791]" />
          </li>
        </ul>
      </div>
      <div className="bg-[#f9fafb] px-10 py-4 rounded-[19px] mt-3">
        <ul className="p-0">
          <li className="text-sm text-[#737791] flex items-center gap-2 my-3">
            Availability Badge{" "}
            <RiShieldStarLine className="text-lg text-[#737791]" />
          </li>
          <li className="text-sm text-[#737791] flex items-center gap-2 my-3">
            Project Catalog
            <SlNotebook className="text-lg text-[#737791]" />
          </li>
        </ul>
      </div>
      <div className="w-full bg-[url(/public/assets/images/Background.png)] bg-no-repeat h-[259px] bg-cover flex justify-center items-center mt-3">
        <div className="w-[210.19px] flex flex-col justify-center items-center gap-3">
          <img src={`./assets/images/logo.svg`} alt="" />
          <h3 className="text-lg font-semibold text-white">Livolink Pro</h3>
          <p className="text-xs text-white text-center">
            Get access to all features on our Platform
          </p>
          <button className="bg-white  text-[#5D5FEF] font-bold py-2 px-8 rounded">
          Get Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
