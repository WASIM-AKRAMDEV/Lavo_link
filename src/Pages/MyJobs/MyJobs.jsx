import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

const MyJobs = () => {
  const [activeTab, setActiveTab] = useState("active"); // State to manage active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Sample data as an array of objects
  const activeData = [
    {
      title: "Banner Design for print layout",
      titleDescription: "Hired by Shahza Ali",
      date: "23 March 2024",
      payment: "total payment",
      price: "200$",
      location: "united state",
      icon: <IoLocationOutline />,
        activepayment: "request for payment",
      active: "active",
       
    },
    {
        title: "Banner Design for print layout",
        titleDescription: "Hired by Shahza Ali",
        date: "23 March 2024",
        payment: "total payment",
        price: "200$",
        location: "united state",
        icon: <IoLocationOutline />,
          activepayment: "request for payment",
        active: "active",
         
      },
      {
        title: "Banner Design for print layout",
        titleDescription: "Hired by Shahza Ali",
        date: "23 March 2024",
        payment: "total payment",
        price: "200$",
        location: "united state",
        icon: <IoLocationOutline />,
          activepayment: "request for payment",
        active: "active",
         
      },
      {
        title: "Banner Design for print layout",
        titleDescription: "Hired by Shahza Ali",
        date: "23 March 2024",
        payment: "total payment",
        price: "200$",
        location: "united state",
        icon: <IoLocationOutline />,
          activepayment: "request for payment",
        active: "active",
         
      },
      {
        title: "Banner Design for print layout",
        titleDescription: "Hired by Shahza Ali",
        date: "23 March 2024",
        payment: "total payment",
        price: "200$",
        location: "united state",
        icon: <IoLocationOutline />,
          activepayment: "request for payment",
        active: "active",
         
      },
      {
          title: "Banner Design for print layout",
          titleDescription: "Hired by Shahza Ali",
          date: "23 March 2024",
          payment: "total payment",
          price: "200$",
          location: "united state",
          icon: <IoLocationOutline />,
            activepayment: "request for payment",
          active: "active",
           
        },
        {
          title: "Banner Design for print layout",
          titleDescription: "Hired by Shahza Ali",
          date: "23 March 2024",
          payment: "total payment",
          price: "200$",
          location: "united state",
          icon: <IoLocationOutline />,
            activepayment: "request for payment",
          active: "active",
           
        },
        {
          title: "Banner Design for print layout",
          titleDescription: "Hired by Shahza Ali",
          date: "23 March 2024",
          payment: "total payment",
          price: "200$",
          location: "united state",
          icon: <IoLocationOutline />,
            activepayment: "request for payment",
          active: "active",
           
        },
  ];

  // Sample data for all jobs
  const allData = [
    {
      title: "Banner Design for print layout",
      titleDescription: "Hired by Shahza Ali",
      date: "23 March 2024",
      payment: "total payment",
      price: "200$",
      location: "united state",
      icon: <IoLocationOutline />,
      activepayments: {
        activepayment: "request for payment",
        payed: "request for payment"
      },
      actives: {
        active: "active",
        complete: "active"
      }
    },
    {
      title: "Banner Design for print layout",
      titleDescription: "Hired by Shahza Ali",
      date: "23 March 2024",
      payment: "total payment",
      price: "200$",
      location: "united state",
      icon: <IoLocationOutline />,
      activepayments: {
        activepayment: "request for payment",
        payed: "payed"
      },
      actives: {
        active: "active",
        complete: "complete"
      }
    },
    {
        title: "Banner Design for print layout",
        titleDescription: "Hired by Shahza Ali",
        date: "23 March 2024",
        payment: "total payment",
        price: "200$",
        location: "united state",
        icon: <IoLocationOutline />,
        activepayments: {
          activepayment: "request for payment",
          payed: "request for payment"
        },
        actives: {
          active: "active",
          complete: "active"
        }
      },
      {
        title: "Banner Design for print layout",
        titleDescription: "Hired by Shahza Ali",
        date: "23 March 2024",
        payment: "total payment",
        price: "200$",
        location: "united state",
        icon: <IoLocationOutline />,
        activepayments: {
          activepayment: "request for payment",
          payed: "payed"
        },
        actives: {
          active: "active",
          complete: "complete"
        }
      },
      {
        title: "Banner Design for print layout",
        titleDescription: "Hired by Shahza Ali",
        date: "23 March 2024",
        payment: "total payment",
        price: "200$",
        location: "united state",
        icon: <IoLocationOutline />,
        activepayments: {
          activepayment: "request for payment",
          payed: "request for payment"
        },
        actives: {
          active: "active",
          complete: "active"
        }
      },
      {
        title: "Banner Design for print layout",
        titleDescription: "Hired by Shahza Ali",
        date: "23 March 2024",
        payment: "total payment",
        price: "200$",
        location: "united state",
        icon: <IoLocationOutline />,
        activepayments: {
          activepayment: "request for payment",
          payed: "payed"
        },
        actives: {
          active: "active",
          complete: "complete"
        }
      },
      {
        title: "Banner Design for print layout",
        titleDescription: "Hired by Shahza Ali",
        date: "23 March 2024",
        payment: "total payment",
        price: "200$",
        location: "united state",
        icon: <IoLocationOutline />,
        activepayments: {
          activepayment: "request for payment",
          payed: "payed"
        },
        actives: {
          active: "active",
          complete: "complete"
        }
      },
    // Add more objects as needed
  ];

  return (
    <div className="px-20 my-10">
      <div className="flex justify-between border-b black-600 items-center">
        <div className="border black-600 mb-3 p-3">
          <button
            className={`capitalize ${
              activeTab === "active" ? "font-semibold" : ""
            }`}
            onClick={() => handleTabClick("active")}
          >
            Active Jobs
          </button>
          <button
            className={`capitalize ml-8 ${
              activeTab === "all" ? "font-semibold" : ""
            }`}
            onClick={() => handleTabClick("all")}
          >
            All Jobs
          </button>
        </div>
        <div className="border black-600 p-3 mb-3 max-md:hidden">
          <button className="capitalize">Create Contract</button>
        </div>
      </div>
      {/* Render content based on active tab */}
      {activeTab === "active" ? (
       <div className="mt-5 overflow-x-auto">
       {/* Table for Active Jobs tab */}
       <table className="w-full table-auto">
         <tbody>
           {activeData.map((job, index) => (
             <tr key={index}>
               <td className="px-4 py-2 md:px-6 md:py-3">
                 <div className="mt-5 whitespace-nowrap">
                   <p className="text-[#84889e] text-[14px] font-semibold">{job.title}</p>
                   <div className="flex items-center">
                     <p className="text-[#84889e] text-[11px]">{job.titleDescription}</p>
                     <span className="text-[#84889e] text-[11px] pl-1">{job.date}</span>
                   </div>
                 </div>
               </td>
               <td className="px-4 py-2 md:px-6 md:py-3">
                 <div className="mt-5">
                   <div className="flex items-center whitespace-nowrap">
                     <p className="text-[#84889e] text-[11px] pl-1 capitalize">{job.payment}</p>
                     <p className="text-[#84889e] text-[11px] pl-1 capitalize">{job.price}</p>
                   </div>
                   <div className="flex items-center whitespace-nowrap">
                     <span className="text-[#84889e] text-[11px] pl-1 capitalize">{job.icon}</span>
                     <p className="text-[#84889e] text-[11px] pl-1 capitalize">{job.location}</p>
                   </div>
                 </div>
               </td>
               <td className="px-4 py-2 md:px-6 md:py-3">
                 <div className="float-end mt-5">
                   <div className="flex items-center whitespace-nowrap">
                     <p className="text-[#84889e] text-[14px] capitalize p-2 border to-black">{job.activepayment}</p>
                     <p className="text-[#84889e] text-[14px] ml-3 capitalize border to-black p-2">{job.active}</p>
                   </div>
                 </div>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
     
      ) : (
        <div className="overflow-x-auto">
          <div className="mt-5">
            {/* Table for All Jobs tab */}
            <table className="w-full table-auto">
              <tbody>
                {allData.map((job, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 md:px-6 md:py-3">
                      <div className="mt-5 whitespace-nowrap">
                        <p className="text-[#84889e] text-[14px] font-semibold">{job.title}</p>
                        <div className="flex items-center whitespace-nowrap">
                          <p className="text-[#84889e] text-[11px]  ">{job.titleDescription}</p>
                          <span className="text-[#84889e] text-[11px] pl-1 ">{job.date}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-3">
                      <div className="mt-5">
                        <div className="flex items-center whitespace-nowrap">
                          <p className="text-[#84889e] text-[11px] pl-1 capitalize ">{job.payment}</p>
                          <p className="text-[#84889e] text-[11px] pl-1 capitalize ">{job.price}</p>
                        </div>
                        <div className="flex items-center whitespace-nowrap">
                          <span className="text-[#84889e] text-[11px] pl-1 capitalize ">{job.icon}</span>
                          <p className="text-[#84889e] text-[11px] pl-1 capitalize ">{job.location}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-3">
                      <div className=" float-end mt-5">
                        <div className="flex items-center whitespace-nowrap">
                          <p className={`text-[14px] text-[#84889e] capitalize border to-black p-2 ${job.activepayments.payed === "payed" ? "text-blue-500 border-blue-500" : "to-black"}`}>{job.activepayments.payed}</p>
                          <p className="text-[#84889e] text-[14px] ml-3 capitalize border to-black p-2">{job.actives.complete}</p>
                        </div>
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

export default MyJobs;
