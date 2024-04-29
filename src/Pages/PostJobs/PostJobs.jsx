import React, { useState } from "react";
import Prosidebar from "../../Components/Prosidebar/Prosidebar";
import { LuPlusCircle } from "react-icons/lu";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import AddSkill from "../../Components/AddSkill/AddSkill";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIOt1C0L9e82ACdQy4A4Gbp5HW6NLWWks",
  authDomain: "waseem-2-4c056.firebaseapp.com",
  projectId: "waseem-2-4c056",
  storageBucket: "waseem-2-4c056.appspot.com",
  messagingSenderId: "653699414802",
  appId: "1:653699414802:web:18ccb768440e40e2f811cb",
  measurementId: "G-8VP78FPVHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to upload jobs to Firestore
const uploadJobsToFirestore = async (jobData) => {
  try {
    await addDoc(collection(db, "jobs"), jobData);
    console.log("Job has been uploaded successfully.");
  } catch (error) {
    console.error("Error uploading job:", error);
  }
};

const PostJobs = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    skills: [],
    createdAt: Timestamp.now(),
    client: {
      id: "client_001",
      paymentVerified: true,
      reviewsCount: 15,
      location: "USA",
      totalSpent: "$100K",
    },
    budget: {
      type: "",
      amount: "",
      estimatedHours: "",
    },
    proposalsCount: "More than 10",
    saved: false,
  });
  const [skills, setSkills] = useState([]);
  // Function to handle form submission
 // Function to handle form submission
const handleSubmit = async (event) => {
  event.preventDefault();
  // Check if any required fields are empty
  if (
    formData.category.trim() === "" ||
    formData.title.trim() === "" ||
    formData.description.trim() === "" ||
    (formData.budget.type === "fixed" && formData.budget.amount.trim() === "") ||
    (formData.budget.type === "hourly" && (formData.budget.rate.trim() === "" || formData.budget.estimatedHours.trim() === ""))
  ) {
    // If any required fields are empty, prevent form submission
    alert("Please fill in all required fields.");
    return;
  }

  // Upload data to Firestore
  await uploadJobsToFirestore(formData);

  // Clear the form after successful submission
  setFormData({
    category: "",
    title: "",
    description: "",
    skills: [],
    createdAt: Timestamp.now(),
    client: {
      id: "client_001",
      paymentVerified: true,
      reviewsCount: 15,
      location: "USA",
      totalSpent: "$100K",
    },
    budget: {
      type: "",
      amount: "",
      estimatedHours: "",
    },
    proposalsCount: "More than 10",
    saved: false,
  });

  // Clear the skills
  setSkills([]);
};


  // Function to handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleBudgetChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      budget: {
        ...formData.budget,
        [name]: value,
      },
    });
  };

  return (
    <div className="my-10 mx-auto px-2 sm:px-2 lg:px-2 max-w-[1550px] flex justify-between">
      <Prosidebar />
      <div className="max-w-[1100px] w-full">
        <div className="border-b border-[#E0E0E0] pb-2">
          <button className="border border-[#E7E7E7] text-[#737791] text-base font-medium px-3 py-1">
            Job Details
          </button>
        </div>
        <div className="mt-3">
          <ul className="bg-[#f9fafb] px-10 py-3 flex">
            <li className="border border-[#E7E7E7] bg-[#151D48] text-white text-base font-medium px-3 py-1 ms-5">
              Job Position
            </li>
            <li className="border border-[#E7E7E7] bg-[#151D48] text-white text-base font-medium px-3 py-1 ms-48">
              Company
            </li>
            <li className="border border-[#E7E7E7] bg-[#151D48] text-white text-base font-medium px-3 py-1 ms-48">
              Location
            </li>
          </ul>
          <ul className="bg-[#fff] px-10 py-6 flex">
            <li className="text-[#737791] text-base font-normal  px-3 py-1 ms-3">
              Graphic Designer
            </li>
            <li className="text-[#737791] text-base font-normal  px-3 py-1 ms-[150px]">
              Print Design Company
            </li>
            <li className="text-[#737791] text-base font-normal  px-3 py-1 ms-24 ">
              United State
            </li>
          </ul>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className=" rounded-2xl px-4 pb-10 flex gap-x-8 flex-wrap">
              <div className="max-w-[48%] w-full mt-5">
                <label
                  htmlFor="#"
                  className="px-1 text-base font-medium text-[#151D48]"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Job Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border border-[#E7E7E7] bg-white mt-1 rounded-md w-full py-3 px-2 focus:border-[#6750a4] focus:shadow-lg outline-none focus:outline-none placeholder:text-[#49454F] text-base"
                />
              </div>

              <div className="max-w-[48%] w-full mt-5">
                <label
                  htmlFor="#"
                  className="px-1 text-base font-medium text-[#151D48]"
                >
                  Budget Type
                </label>
                <select
                  name="type"
                  value={formData.budget.type}
                  onChange={handleBudgetChange}
                  className="border border-[#E7E7E7] bg-white mt-1 rounded-md w-full py-3 px-2 focus:border-[#6750a4] focus:shadow-lg outline-none placeholder:text-[#49454F] focus:outline-none text-base"
                >
                  <option value="">Select Budget Type</option>
                  <option value="fixed">Fixed</option>
                  <option value="hourly">Hourly</option>
                </select>
              </div>
              {formData.budget.type === "fixed" && (
                <div className="max-w-[48%] w-full mt-5">
                  <label
                    htmlFor="#"
                    className="px-1 text-base font-medium text-[#151D48]"
                  >
                    Budget Amount
                  </label>
                  <input
                    type="text"
                    name="amount"
                    placeholder="Budget Amount"
                    value={formData.budget.amount}
                    onChange={handleBudgetChange}
                    className="border border-[#E7E7E7] bg-white mt-1 rounded-md w-full py-3 px-2 focus:border-[#6750a4] focus:shadow-lg outline-none focus:outline-none placeholder:text-[#49454F] text-base"
                  />
                </div>
              )}
              {formData.budget.type === "hourly" && (
                <>
                  <div className="max-w-[48%] w-full mt-5">
                    <label
                      htmlFor="#"
                      className="px-1 text-base font-medium text-[#151D48]"
                    >
                      Hourly Rate
                    </label>
                    <input
                      type="text"
                      name="rate"
                      placeholder="Hourly Rate"
                      value={formData.budget.rate}
                      onChange={handleBudgetChange}
                      className="border border-[#E7E7E7] bg-white mt-1 rounded-md w-full py-3 px-2 focus:border-[#6750a4] focus:shadow-lg outline-none focus:outline-none placeholder:text-[#49454F] text-base"
                    />
                  </div>
                  <div className="max-w-[48%] w-full mt-5">
                    <label
                      htmlFor="#"
                      className="px-1 text-base font-medium text-[#151D48]"
                    >
                      Estimated Hours
                    </label>
                    <input
                      type="text"
                      name="estimatedHours"
                      placeholder="Estimated Hours"
                      value={formData.budget.estimatedHours}
                      onChange={handleBudgetChange}
                      className="border border-[#E7E7E7] bg-white mt-1 rounded-md w-full py-3 px-2 focus:border-[#6750a4] focus:shadow-lg outline-none focus:outline-none placeholder:text-[#49454F] text-base"
                    />
                  </div>
                </>
              )}

              <div className="max-w-[48%] w-full mt-5">
                <label
                  htmlFor="#"
                  className="px-1 text-base font-medium text-[#151D48]"
                >
                  Catgery
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="border border-[#E7E7E7] bg-white uppercase mt-1 rounded-md w-full py-3 px-2 focus:border-[#6750a4] focus:shadow-lg outline-none placeholder:text-[#49454F] focus:outline-none text-base"
                >
                  <option value="">Add catgery</option>
                  <option value="frontend-backend">Frontend & Backend</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="bookkeeping">Bookkeeping</option>
                  <option value="developer">Developer</option>
                  <option value="bookkeeping">HR Manager</option>
                </select>
              </div>

              <AddSkill
                skills={skills}
                setSkills={setSkills}
                formData={formData}
                setFormData={setFormData}
              />

              <div className="max-w-[100%] mt-5 w-full">
                <label
                  htmlFor="#"
                  className="px-1 text-base font-medium text-[#151D48]"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  type="text"
                  value={formData.description}
                  onChange={handleChange}
                  className="border border-[#E7E7E7] bg-white mt-1 h-[20vh] rounded-md w-full py-3 px-2 focus:border-[#6750a4] placeholder:text-[#49454F] focus:shadow-lg outline-none focus:outline-none text-base resize-none"
                  placeholder="Add description"
                />
              </div>
            </div>
            <div className="flex items-end gap-4 justify-end mt-6">
              <button
                type="submit"
                className="bg-[#5D5FEF] rounded-md text-white text-base px-3 py-1 flex items-center gap-4"
              >
                <LuPlusCircle className="text-base" />
                POST JOB
              </button>
              <button className="bg-[#F5F5F5] rounded-md text-[#737791] text-base px-3 py-1 border border-[#79747E]">
                DISCARD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJobs;
