import React, { useState } from "react";
import { LiaLessThanSolid } from "react-icons/lia";
import { TbMathGreater } from "react-icons/tb";
const Order = () => {
  const [activeTab, setActiveTab] = useState("active"); // State to manage active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Sample data as an array of objects
  const activeData = [
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "in progress",
      amount: "200$",
      orderAceepted: "orderAceepted",
      declineAceepted: "declineAceepted",
    },
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "in progress",
      amount: "200$",
      orderAceepted: "orderAceepted",
      declineAceepted: "declineAceepted",
    },
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "in progress",
      amount: "200$",
      orderAceepted: "orderAceepted",
      declineAceepted: "declineAceepted",
    },
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "in progress",
      amount: "200$",
      orderAceepted: "orderAceepted",
      declineAceepted: "declineAceepted",
    },
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "in progress",
      amount: "200$",
      orderAceepted: "orderAceepted",
      declineAceepted: "declineAceepted",
    },
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "in progress",
      amount: "200$",
      orderAceepted: "orderAceepted",
      declineAceepted: "declineAceepted",
    },
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "in progress",
      amount: "200$",
      orderAceepted: "orderAceepted",
      declineAceepted: "declineAceepted",
    },
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "in progress",
      amount: "200$",
      orderAceepted: "orderAceepted",
      declineAceepted: "declineAceepted",
    },
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "in progress",
      amount: "200$",
      orderAceepted: "orderAceepted",
      declineAceepted: "declineAceepted",
    },
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "in progress",
      amount: "200$",
      orderAceepted: "orderAceepted",
      declineAceepted: "declineAceepted",
    },
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "in progress",
      amount: "200$",
      orderAceepted: "orderAceepted",
      declineAceepted: "declineAceepted",
    },
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "in progress",
      amount: "200$",
      orderAceepted: "orderAceepted",
      declineAceepted: "declineAceepted",
    },

    // Add more objects as needed
  ];

  // Sample data for all jobs
  const allData = [
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "pending",
      amount: "200$",
      orderAceepted: "Aceepted order",
      declineAceepted: "declineAceepted",
    },
      {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "pending",
      amount: "200$",
      orderAceepted: "Aceepted order",
      declineAceepted: "declineAceepted",
    },
      {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "pending",
      amount: "200$",
      orderAceepted: "Aceepted order",
      declineAceepted: "declineAceepted",
    },
      {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "pending",
      amount: "200$",
      orderAceepted: "Aceepted order",
      declineAceepted: "declineAceepted",
    },
    {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "pending",
      amount: "200$",
      orderAceepted: "Aceepted order",
      declineAceepted: "declineAceepted",
    },
      {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "pending",
      amount: "200$",
      orderAceepted: "Aceepted order",
      declineAceepted: "declineAceepted",
    },
      {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "pending",
      amount: "200$",
      orderAceepted: "Aceepted order",
      declineAceepted: "declineAceepted",
    },
      {
      date: "23rd March 2024",
      orderType: "hourly/fixed",
      deliveryDate: "20 may 2024",
      status: "pending",
      amount: "200$",
      orderAceepted: "Aceepted order",
      declineAceepted: "declineAceepted",
    },
    
   
    // Add more objects as needed
  ];

  return (
    <div className=" my-10">
      <div className="px-20">
        <div className="flex justify-between border-b black-600 items-center ">
          <div className="border black-600 mb-3 p-3 ">
            <button
              className={`capitalize whitespace-nowrap max-sm:w-full ${
                activeTab === "active" ? "font-semibold" : ""
              }`}
              onClick={() => handleTabClick("active")}
            >
              Active orders
            </button>
            <button
              className={`capitalize whitespace-nowrap  max-sm:w-full ml-8  max-sm:ml-0 ${
                activeTab === "all" ? "font-semibold" : ""
              }`}
              onClick={() => handleTabClick("all")}
            >
              pending orders
            </button>
          </div>
          <div className="border black-600 p-3 mb-3 max-md:hidden">
            <button className="capitalize">Create Contract</button>
          </div>
        </div>
      </div>
      {/* Render content based on active tab */}
      {activeTab === "active" ? (
        <div className="mt-5 overflow-x-auto">
          {/* Table for Active Jobs tab */}
          <table className="w-full table-auto">
            <thead className=" bg-[#f9fafb]">
                <tr className="whitespace-nowrap">
                  <th className=" text-start capitalize font-semibold w-52 py-3 pl-20">
                    date
                  </th>
                  <th className=" text-start capitalize font-semibold w-52 py-3 pl-28">
                    order type
                  </th>
                  <th className=" text-start capitalize font-semibold w-52 py-3 pl-28 ">
                    delivery date
                  </th>
                  <th className=" text-start capitalize font-semibold w-36 py-3 pl-28" >
                    status
                  </th>
                  <th className=" text-start capitalize font-semibold w-36 py-3 pl-28">
                    amount
                  </th>
                  <th>
                    <div className="flex items-center py-3 pl-44">
                      <LiaLessThanSolid />
                      <p className="px-2"> 1-40</p>
                      <TbMathGreater />
                    </div>
                  </th>
                </tr>
              </thead>
            <tbody>
              {activeData.map((order, index) => (
                <tr key={index}>
                  <td className="pl-20 whitespace-nowrap">
                    <div className="mt-5">
                      <p className="text-[#84889e] text-[11px]  ">
                        {order.date}
                      </p>
                    </div>
                  </td>
                  <td className="pl-28 whitespace-nowrap">
                    <div className="mt-5">
                      <p className="text-[#84889e] text-[11px]  capitalize ">
                        {order.orderType}
                      </p>
                    </div>
                  </td>
                   <td className="pl-28 whitespace-nowrap">
                    <div className=" mt-5">
                      <p className=" text-[#84889e] text-[11px] capitalize">
                        {order.deliveryDate}
                      </p>
                    </div>
                  </td>
                    <td className="pl-28 whitespace-nowrap">
                    <div className=" mt-5">
                      <p className=" text-[#84889e] text-[11px] capitalize">
                        {order.status}
                      </p>
                    </div>
                  </td>
                   <td className="pl-28 whitespace-nowrap">
                    <div className=" mt-5">
                      <p className=" text-[#84889e] text-[11px] capitalize">
                        {order.amount}
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap">
                    <div className=" mt-5 flex justify-center">
                      <p className=" text-[#2c42b9] text-[13px] capitalize border to-black p-2 font-semibold">
                        {order.orderAceepted}
                      </p>
                      <p className=" text-[#84889e] text-[13px] capitalize border to-black p-2 font-semibold ml-2 ">
                        {order.declineAceepted}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <div className="mt-5 overflow-x-auto">
          {/* Table for Active Jobs tab */}
          <table className="w-full table-auto ">
            <thead className=" bg-[#f9fafb]">
                <tr className="whitespace-nowrap " >
                  <th className=" text-start capitalize font-semibold w-52 py-3 pl-20">
                    date
                  </th>
                  <th className=" text-start capitalize font-semibold w-52 py-3 pl-28">
                    order type
                  </th>
                  <th className=" text-start capitalize font-semibold w-52 py-3 pl-28">
                    delivery date
                  </th>
                  <th className=" text-start capitalize font-semibold w-36 py-3 pl-28" >
                    status
                  </th>
                  <th className=" text-start capitalize font-semibold w-36 py-3 pl-28">
                    amount
                  </th>
                  <th>
                    <div className="flex items-center py-3 pl-44">
                      <LiaLessThanSolid />
                      <p className="px-2"> 1-40</p>
                      <TbMathGreater />
                    </div>
                  </th>
                </tr>
              </thead>
            <tbody>
              {allData.map((order, index) => (
                <tr key={index} className="whitespace-nowrap ">
                  <td className="pl-20">
                    <div className="mt-5">
                      <p className="text-[#84889e] text-[11px]  ">
                        {order.date}
                      </p>
                    </div>
                  </td>
                <td className="pl-28">
                    <div className="mt-5">
                      <p className="text-[#84889e] text-[11px]  capitalize ">
                        {order.orderType}
                      </p>
                    </div>
                  </td>
                <td className="pl-28">
                    <div className=" mt-5">
                      <p className=" text-[#84889e] text-[11px] capitalize">
                        {order.deliveryDate}
                      </p>
                    </div>
                  </td>
                 <td className="pl-28">
                    <div className=" mt-5">
                      <p className=" text-[#84889e] text-[11px] capitalize">
                        {order.status}
                      </p>
                    </div>
                  </td>
                  <td className="pl-28">
                    <div className=" mt-5">
                      <p className=" text-[#84889e] text-[11px] capitalize">
                        {order.amount}
                      </p>
                    </div>
                  </td>
                   <td className="">
                    <div className=" mt-5 flex justify-center">
                      <p className=" text-[#2c42b9] text-[13px] capitalize border to-black p-2 font-semibold">
                        {order.orderAceepted}
                      </p>
                      <p className=" text-[#84889e] text-[13px] capitalize border to-black p-2 font-semibold ml-2 ">
                        {order.declineAceepted}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      )}
    </div>
  );
};

export default Order;
