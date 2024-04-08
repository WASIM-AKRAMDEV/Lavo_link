import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";

import { Link } from 'react-router-dom';
import "../chatmessage/message.css"

const Message = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleActive = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Dummy data
  const data = [
    { name: "Lavolink", page: "firstPage", image: "../assets/images/user(1).png" },
    { name: "Shazad Ali", page: "secondPage", image: "../assets/images/user(2).png" },
    { name: "Noman", page: "thirthPage", image: "../assets/images/user(5).png" },
    
  ];

  return (
    <div className=" bg-[#f9fafb] h-[100vh]  w-full pb-20">
      <h2 className="capitalize text-[#151d48] pt-14 text-center text-[26px] font-semibold">
        messages
      </h2>
      <div className="flex bg-[#f0f0f0] w-[370px] mx-3 px-4 py-4 rounded-2xl item-center mt-2 shadow-[0 0 10px] to-black">
        <div className="text-[22px]">
          <LuSearch />
        </div>
        <input
          className="bg-transparent text-[13px] pl-2 outline-none w-full"
          type="text"
          placeholder="Search here..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="mt-12 mr-6  h-[420px] ">
        {/* Filter and sort the list based on search query */}
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item, index) => (
            <Link to={`/messages/${item.page}`} key={index}>
              <div
                onClick={() => handleActive(item.page)}
                className={`bg-${
                  activeTab === item.page ? "white" : "#ffffff"
                } w-[340px] h-32 rounded-2xl ml-6 flex items-center cursor-pointer relative mr-8`}
              >
                <div className="w-20 pl-2 relative ">
                  <img className="w-full " src={item.image} alt="" />
                  <div className=" absolute bg-[#5d5fef] w-3 h-3 rounded-full top-2 right-0 "></div>
                </div>
                <div className="pl-5">
                  <h2 className="capitalize text-xl font-medium text-[#151d48]">
                    {item.name}
                  </h2>
                  <p className="capitalize text-sm text-[#151d48]">
                    last seen 12:30PM
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Message;




