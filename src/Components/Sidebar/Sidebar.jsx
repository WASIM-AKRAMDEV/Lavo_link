import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { VscLink } from "react-icons/vsc";
import { RiShieldStarLine } from "react-icons/ri";
import { SlNotebook } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { GiCloudUpload } from "react-icons/gi";

const Sidebar = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileName, setProfileName] = useState("Shahzad");
  const [profileTitle, setProfileTitle] = useState("Blockchain Developer");
  const [fromLocation, setFromLocation] = useState("United States");
  const [memberSince, setMemberSince] = useState("Mar, 2024");
  const [newText, setNewText] = useState("");
  const [additionalTexts, setAdditionalTexts] = useState([
    "Lavolink Academy",
    "Offer Contract",
    "Get Paid",
    "Help Center",
  ]);

  const handleAddNewText = () => {
    if (newText.trim() !== "") {
      setAdditionalTexts([...additionalTexts, newText]);
      setNewText("");
    }
  };

  const handleRemoveText = (index) => {
    const updatedTexts = [...additionalTexts];
    updatedTexts.splice(index, 1);
    setAdditionalTexts(updatedTexts);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  return (
    <div className="w-[23%]">
      <div className="bg-[#f9fafb] p-10 rounded-[19px] h-[246px] flex flex-col justify-between relative">
        <div className="flex justify-end items-center mb-3">
          <div className="absolute right-12 top-3 ">
            <label
              htmlFor="image-upload"
              className="text-sm text-[#737791] cursor-pointer"
            >
              <GiCloudUpload className="text-xl" />
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
          <button
            onClick={() => setEditMode(!editMode)}
            className="bg-transparent border-none text-[#5D5FEF] text-sm"
          >
            {editMode ? (
              <FiPlusCircle className="text-[#737791] text-xl absolute right-6 top-3" />
            ) : (
              <TbEdit className="text-[#737791] text-xl absolute right-6 top-3" />
            )}
          </button>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
              alt=""
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#151D48]">
              {editMode ? (
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="text-xl font-semibold text-[#151D48] outline-none border-none bg-transparent"
                />
              ) : (
                profileName
              )}
            </h3>
            <p className="text-xs">
              {editMode ? (
                <input
                  type="text"
                  value={profileTitle}
                  onChange={(e) => setProfileTitle(e.target.value)}
                  className="text-xs outline-none border-none bg-transparent"
                />
              ) : (
                profileTitle
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-[#737791] text-xl" />
              <p className="text-sm text-[#737791]">
                {editMode ? (
                  <input
                    type="text"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    className="text-sm text-[#737791] outline-none border-none bg-transparent"
                  />
                ) : (
                  "From"
                )}
              </p>
            </div>
            <p className="text-[#737791] text-sm">{fromLocation}</p>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2">
              <IoPersonCircleSharp className="text-[#737791] text-xl" />
              <p className="text-sm text-[#737791]">
                {editMode ? (
                  <input
                    type="text"
                    value={memberSince}
                    onChange={(e) => setMemberSince(e.target.value)}
                    className="text-sm text-[#737791] outline-none border-none bg-transparent"
                  />
                ) : (
                  "Member Since"
                )}
              </p>
            </div>
            <p className="text-[#737791] text-sm">{memberSince}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] px-10 py-4 rounded-[19px] mt-3">
        <ul className="p-0">
          {additionalTexts.map((text, index) => (
            <li
              key={index}
              className="text-sm text-[#737791] flex items-center gap-2 my-3"
            >
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => {
                      const updatedTexts = [...additionalTexts];
                      updatedTexts[index] = e.target.value;
                      setAdditionalTexts(updatedTexts);
                    }}
                    className="text-sm text-[#737791] outline-none border-none bg-transparent"
                  />
                  <button
                    onClick={() => handleRemoveText(index)}
                    className="text-sm text-[#737791] outline-none border-none bg-transparent"
                  >
                    <VscLink className="text-lg text-[#737791]" />
                  </button>
                </>
              ) : (
                <>
                  {text}
                  <VscLink className="text-lg text-[#737791]" />
                </>
              )}
            </li>
          ))}
          {editMode && (
            <li className="text-sm text-[#737791] flex items-center gap-2 my-3">
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="text-sm text-[#737791] outline-none border-none bg-transparent"
              />
              <button
                onClick={handleAddNewText}
                className="text-sm text-[#737791] outline-none border-none bg-transparent"
              >
                <VscLink className="text-lg text-[#737791]" />
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="bg-[#f9fafb] px-10 py-4 rounded-[19px] mt-3">
        <ul className="p-0">
          <li className="text-sm text-[#737791] flex items-center gap-2 my-3">
            Availability Badge{" "}
            <RiShieldStarLine className="text-lg text-[#737791]" />
          </li>
          <li className="text-sm text-[#737791] flex items-center gap-2 my-3">
            <Link
              to="/profile"
              className="text-sm text-[#737791] flex items-center gap-2 my-3"
            >
              Project Catalog
              <SlNotebook className="text-lg text-[#737791]" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full bg-[url(/public/assets/images/Background.png)] bg-no-repeat h-[259px] bg-cover flex justify-center items-center mt-3">
        <div className="w-[210.19px] flex flex-col justify-center items-center gap-3">
          <img src={`/public/assets/images/logo.svg`}  alt="" />
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
