import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { VscLink } from "react-icons/vsc";
import { FiPlusCircle } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";


const Prosidebar = () => {
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
      <div className="bg-[#f9fafb] px-10 py-4 rounded-[19px] mt-3 relative">
      <TbEdit className="text-[#737791] text-xl absolute right-6 top-3" />
      <FiPlusCircle className="text-[#737791] text-xl absolute right-12 top-3" />
      
        <ul className="p-0">
          <li className="text-sm text-[#737791] flex items-center gap-2 my-3">
            Education
            <VscLink className="text-lg text-[#737791]" />
          </li>
          <li className="text-sm text-[#737791]  my-2 font-medium">
            Name of University
          </li>
          <li className="text-sm text-[#737791]  my-2 font-light">
            BS Computer Science
          </li>
          <li className="text-sm text-[#737791]  my-2 font-medium">
            Name of University
          </li>
          <li className="text-sm text-[#737791]  my-2 font-light">
            BS Computer Science
          </li>
        </ul>
      </div>
      <div className="bg-[#f9fafb] px-10 py-4 rounded-[19px] mt-3 relative">
      <TbEdit className="text-[#737791] text-xl absolute right-6 top-3" />
      <FiPlusCircle className="text-[#737791] text-xl absolute right-12 top-3" />
        <ul className="p-0">
          <li className="text-sm text-[#737791] flex items-center gap-2 my-3">
            Education
            <VscLink className="text-lg text-[#737791]" />
          </li>
          <li className="text-sm text-[#737791] flex items-center gap-2 my-3">
          Identitiy Card No
            <VscLink className="text-lg text-[#737791]" />
          </li>
          <li className="text-sm text-[#737791] flex items-center  gap-2 my-3">
          Verified/Unverified
            <VscLink className="text-lg text-[#737791]" />
          </li>
          <li className="text-sm text-[#737791] flex items-center gap-2 my-3">
          Hourly Rate
            <VscLink className="text-lg text-[#737791]" />
          </li>
          
        </ul>
      </div>
      <div className="bg-[#f9fafb] px-10 py-4 rounded-[19px] mt-3 relative">
      <TbEdit className="text-[#737791] text-xl absolute right-6 top-3" />
      <FiPlusCircle className="text-[#737791] text-xl absolute right-12 top-3" />
        <ul className="p-0">
          <li className="text-sm text-[#737791]  my-3">
            Langauge
     
          </li>
          <li className="text-sm text-[#737791] flex items-center gap-4 my-2">
          English
            <p className="font-light">Fluent</p>
          </li>
          <li className="text-sm text-[#737791] flex items-center  gap-4 my-2">
          English
            <p className="font-light">Fluent</p>
          </li>
          <li className="text-sm text-[#737791] flex items-center gap-4 my-2">
          English
            <p className="font-light">Fluent</p>
          </li>
          
        </ul>
      </div>
      
     
    </div>
  );
};

export default Prosidebar;
