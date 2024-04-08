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


// import React, { useState } from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoPersonCircleSharp } from "react-icons/io5";
// import { VscLink } from "react-icons/vsc";
// import { FiPlusCircle } from "react-icons/fi";
// import { TbEdit } from "react-icons/tb";

// const Prosidebar = () => {
//   const [editMode, setEditMode] = useState(false);
//   const [profileName, setProfileName] = useState("Shahzad");
//   const [profileTitle, setProfileTitle] = useState("Blockchain Developer");
//   const [fromLocation, setFromLocation] = useState("United States");
//   const [memberSince, setMemberSince] = useState("Mar, 2024");

//   const [fields, setFields] = useState([
//     {
//       title: "Education",
//       items: [{ label: "Name of University", detail: "BS Computer Science" }],
//     },
//     {
//       title: "Identification",
//       items: [
//         { label: "Identitiy Card No", detail: "123456789" },
//         { label: "Verified/Unverified", detail: "Verified" },
//         { label: "Hourly Rate", detail: "$50" },
//       ],
//     },
//     {
//       title: "Languages",
//       items: [
//         { label: "English", detail: "Fluent" },
//         { label: "French", detail: "Intermediate" },
//         { label: "Spanish", detail: "Basic" },
//       ],
//     },
//   ]);

//   const handleEditField = (index) => {
//     const updatedEditModes = fields.map((field, i) => i === index);
//     setEditMode(updatedEditModes);
//   };

//   return (
//     <div className="w-[345px]">
//       <div className="bg-[#f9fafb] p-10 rounded-[19px] h-[246px] flex flex-col justify-between relative">
//         <div className="flex justify-end items-center mb-3">
//           {editMode ? (
//             <TbEdit
//               className="text-[#737791] text-xl absolute right-6 top-3 cursor-pointer"
//               onClick={() => setEditMode(!editMode)}
//             />
//           ) : null}
//         </div>
//         <div className="flex gap-3 items-center">
//           <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//               alt=""
//               width="100%"
//               height="100%"
//             />
//           </div>
//           <div>
//             <h3 className="text-2xl font-semibold text-[#151D48]">
//               {editMode ? (
//                 <input
//                   type="text"
//                   value={profileName}
//                   onChange={(e) => setProfileName(e.target.value)}
//                   className="text-3xl font-semibold text-[#151D48] outline-none border-none bg-transparent"
//                 />
//               ) : (
//                 profileName
//               )}
//             </h3>
//             <p className="text-base">
//               {editMode ? (
//                 <input
//                   type="text"
//                   value={profileTitle}
//                   onChange={(e) => setProfileTitle(e.target.value)}
//                   className="text-base outline-none border-none bg-transparent"
//                 />
//               ) : (
//                 profileTitle
//               )}
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col gap-5">
//           <div className="flex justify-between w-full">
//             <div className="flex items-center gap-2">
//               <FaLocationDot className="text-[#737791] text-xl" />
//               <p className="text-sm text-[#737791]">
//                 {editMode ? (
//                   <input
//                     type="text"
//                     value={fromLocation}
//                     onChange={(e) => setFromLocation(e.target.value)}
//                     className="text-sm text-[#737791] outline-none border-none bg-transparent"
//                   />
//                 ) : (
//                   "From"
//                 )}
//               </p>
//             </div>
//             <p className="text-[#737791] text-sm">{fromLocation}</p>
//           </div>
//           <div className="flex justify-between w-full">
//             <div className="flex items-center gap-2">
//               <IoPersonCircleSharp className="text-[#737791] text-xl" />
//               <p className="text-sm text-[#737791]">
//                 {editMode ? (
//                   <input
//                     type="text"
//                     value={memberSince}
//                     onChange={(e) => setMemberSince(e.target.value)}
//                     className="text-sm text-[#737791] outline-none border-none bg-transparent"
//                   />
//                 ) : (
//                   "Member Since"
//                 )}
//               </p>
//             </div>
//             <p className="text-[#737791] text-sm">{memberSince}</p>
//           </div>
//         </div>
//       </div>
//       {fields.map((field, index) => (
//         <div key={index} className="bg-[#f9fafb] px-10 py-4 rounded-[19px] mt-3 relative">
//           {index === 0 ? (
//             <TbEdit
//               className="text-[#737791] text-xl absolute right-6 top-3 cursor-pointer"
//               onClick={() => handleEditField(index)}
//             />
//           ) : null}
//           <div className="flex items-center justify-between">
//             <h4 className="text-lg font-semibold">{field.title}</h4>
//             <FiPlusCircle className="text-[#737791] text-xl" />
//           </div>
//           {field.items.map((item, idx) => (
//             <ul key={idx} className="p-0 mt-2">
//               <li className="text-sm text-[#737791] flex items-center gap-2 my-1">
//                 {editMode ? (
//                   <input
//                     type="text"
//                     value={item.label}
//                     onChange={(e) => {
//                       const updatedFields = [...fields];
//                       updatedFields[index].items[idx].label = e.target.value;
//                       setFields(updatedFields);
//                     }}
//                     className="text-lg text-[#737791] outline-none border-none"
//                   />
//                 ) : (
//                   item.label
//                 )}
//                 <VscLink className="text-lg text-[#737791]" />
//               </li>
//               <li className="text-sm text-[#737791] my-1">
//                 {editMode ? (
//                   <input
//                     type="text"
//                     value={item.detail}
//                     onChange={(e) => {
//                       const updatedFields = [...fields];
//                       updatedFields[index].items[idx].detail = e.target.value;
//                       setFields(updatedFields);
//                     }}
//                     className="text-sm text-[#737791] outline-none border-none"
//                   />
//                 ) : (
//                   item.detail
//                 )}
//               </li>
//             </ul>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Prosidebar;




