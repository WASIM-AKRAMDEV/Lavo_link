import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { IoSearch } from "react-icons/io5";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
  limit,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { MdVerified } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { LiaStarSolid } from "react-icons/lia";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import "../FindWork/style.css";
import { FaHeart } from "react-icons/fa";
import Slider from "../../Components/Slider/Slider";
import { TailSpin } from 'react-loader-spinner';


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
initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore();

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const FindWork = () => {
  const [activeTab, setActiveTab] = useState("Best Match");
  const [savedJobs, setSavedJobs] = useState([]);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const categories = [
    "All",
    "Graphic Design",
    "Frontend & Backend",
    "Digital Marketing",
    "UI/UX Design",
    "Bookkeeping",
    "Developer",
    "Instructor",
    "HR Manager",
  ];

  // Fetch jobs from Firestore
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let q;
        if (activeTab === "Recent Jobs") {
          q = query(collection(db, "jobs"), orderBy("createdAt"), limit(10));
        } else {
          q = query(collection(db, "jobs"));
        }
        const querySnapshot = await getDocs(q);
        const jobsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJobs(jobsData);
        setFilteredJobs(jobsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [activeTab]);

  // Filter jobs based on selected tab or category
  useEffect(() => {
    const filterJobs = () => {
      let jobsToFilter = [...jobs];

      if (activeCategory !== "All") {
        jobsToFilter = jobsToFilter.filter(
          (job) => job.category === activeCategory
        );
      }

      if (searchTerm) {
        jobsToFilter = jobsToFilter.filter(
          (job) =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredJobs(jobsToFilter);
      setLoading(false);
    };

    filterJobs();
  }, [activeCategory, searchTerm, jobs]);

  // Handlers for category change and search input
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSaveJob = async (jobId) => {
    try {
      const isJobSaved = savedJobs.includes(jobId);
      const jobRef = doc(db, "jobs", jobId);

      if (isJobSaved) {
        // Remove the job from saved jobs
        setSavedJobs(savedJobs.filter((id) => id !== jobId));
        // Update the job in Firestore to remove the timestamp
        await updateDoc(jobRef, {
          saved: false,
          createdAt: null, // Always set createdAt to null when removing the job
        });
      } else {
        // Add the job to saved jobs
        setSavedJobs([...savedJobs, jobId]);
        // Update the job in Firestore to set the timestamp
        await updateDoc(jobRef, {
          saved: true,
          createdAt: serverTimestamp(), // Always set createdAt to server timestamp when saving the job
        });
      }
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#0D074D"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div className="find-work">
      {/* Swiper start */}
     <Slider/>
      {/* Swiper end */}

      <div className="my-10 mx-auto px-2 sm:px-2 lg:px-2 max-w-[1550px] flex xl:gap-4 2xl:gap-12">
        {/* Sidebar start */}
        <Sidebar />
        {/* Sidebar end*/}
        <div className="max-w-[1100px] w-full">
          <nav className="flex items-center justify-between p-4 border-b border-[#E7E7E7]">
            <div className="flex space-x-8">
              <button
                className={`text-[#737791] text-base ${
                  activeTab === "Best Match"
                    ? "border-b-2 border-[#151D48]"
                    : ""
                }`}
                onClick={() => handleTabChange("Best Match")}
              >
                Best Match
              </button>
              <button
                className={`text-[#737791] text-base ${
                  activeTab === "Recent Jobs"
                    ? "border-b-2 border-[#151D48]"
                    : ""
                }`}
                onClick={() => handleTabChange("Recent Jobs")}
              >
                Recent Jobs
              </button>
              <button
                className={`text-[#737791] text-base ${
                  activeTab === "Saved Jobs"
                    ? "border-b-2 border-[#151D48]"
                    : ""
                }`}
                onClick={() => handleTabChange("Saved Jobs")}
              >
                Saved Jobs
              </button>
            </div>
            <div className="relative rounded-lg  bg-[#f9fafb]">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                <span className="text-[##0D074D] text-xl">
                  <IoSearch />
                </span>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md  border-0 py-3 pl-10 pr-44 bg-[#f9fafb]   ring-gray-300 placeholder:text-[#737791] placeholder:text-base  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search here..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </nav>

          <div className="p-4">
            {activeTab === "Best Match" && (
              <div>
                <div className="flex gap-2 mb-4">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={classNames(
                        "text-sm text-[#737791] px-2 py-1",
                        activeCategory === category
                          ? "border border-[#737791]"
                          : ""
                      )}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="mt-4 overflow-y-scroll h-[90vh] scrollbar">
                  {/* Render the filtered jobs */}
                  {filteredJobs.map((job) => (
                    <div className="w-[100%] p-3 my-3 relative " key={job.id}>
                      {savedJobs.includes(job.id) ? (
                        <FaHeart
                          className="absolute right-8 top-4 text-[#0D074D] cursor-pointer"
                          onClick={() => handleSaveJob(job.id)}
                        />
                      ) : (
                        <FaRegHeart
                          className="absolute right-8 top-4 text-[#0D074D] cursor-pointer"
                          onClick={() => handleSaveJob(job.id)}
                        />
                      )}
                      <div className="w-[95%] flex justify-between items-center text-[#737791]">
                        <div className="">
                          {job.createdAt && (
                            <p className="text-[8px] font-normal">
                              {new Date(
                                job.createdAt.seconds * 1000
                              ).toLocaleString()}
                            </p>
                          )}

                          <h3 className="text-base font-semibold">
                            {job.title}
                          </h3>
                          <p className="text-[8px] font-normal">
                            {job.budget.estimatedHours}
                          </p>
                          <h5 className="text-[10px] font-medium w-96 truncate">
                            {job.description}
                          </h5>
                        </div>
                        <div className="text-[#737791] w-56 flex flex-wrap gap-x-4 gap-y-2">
                          <div className="flex gap-1 items-center h-fit">
                            <MdVerified className="text-xs text-[#0D074D]" />
                            <p className="text-[8px] font-normal">
                              Payment Verified
                            </p>
                          </div>
                          <div className=" flex gap-1 items-center h-fit">
                            <div className="flex items-center text-[#e7bd19]">
                              <LiaStarSolid className="text-xs" />
                              <LiaStarSolid className="text-xs" />
                              <LiaStarSolid className="text-xs" />
                              <LiaStarSolid className="text-xs" />
                              <LiaStarSolid className="text-xs" />
                            </div>
                            <p className="text-[8px] font-normal">
                              {job.client.totalSpent}
                            </p>
                          </div>
                          <div className="flex gap-1 items-center h-fit">
                            <FaCircleUser className="text-xs text-[#0D074D]" />
                            <p className="text-[8px] font-normal">
                              {job.client.id}
                            </p>
                          </div>
                          <div className="flex gap-1 items-center h-fit">
                            <FaLocationDot className="text-xs text-[#0D074D]" />
                            <p className="text-[8px] font-normal">
                              {job.client.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "Recent Jobs" && (
              <div>
                <div>
                  <div className="flex gap-2 mb-4">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={classNames(
                          "text-sm text-[#737791] px-2 py-1",
                          activeCategory === category
                            ? "border border-[#737791]"
                            : ""
                        )}
                        onClick={() => handleCategoryChange(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 overflow-y-scroll h-[90vh] ">
                    {/* Render the filtered jobs */}
                    {filteredJobs.map((job) => (
                      <div className="w-[100%] p-3 my-3 relative" key={job.id}>
                        {savedJobs.includes(job.id) ? (
                          <FaHeart
                            className="absolute right-8 top-4 text-[#0D074D] cursor-pointer"
                            onClick={() => handleSaveJob(job.id)}
                          />
                        ) : (
                          <FaRegHeart
                            className="absolute right-8 top-4 text-[#0D074D] cursor-pointer"
                            onClick={() => handleSaveJob(job.id)}
                          />
                        )}
                        <div className="w-[95%] flex justify-between items-center text-[#737791]">
                          <div className="">
                            {job.createdAt && (
                              <p className="text-[8px] font-normal">
                                {new Date(
                                  job.createdAt.seconds * 1000
                                ).toLocaleString()}
                                {console.log(
                                  new Date(
                                    job.createdAt.seconds * 1000
                                  ).toLocaleString()
                                )}
                              </p>
                            )}
                            <h3 className="text-base font-semibold">
                              {job.title}
                            </h3>
                            <p className="text-[8px] font-normal">
                              {job.budget.estimatedHours}
                            </p>
                            <h5 className="text-[10px] font-medium w-96 truncate">
                              {job.description}
                            </h5>
                          </div>
                          <div className="text-[#737791] w-56 flex flex-wrap gap-x-4 gap-y-2">
                            <div className="flex gap-1 items-center h-fit">
                              <MdVerified className="text-xs text-[#0D074D]" />
                              <p className="text-[8px] font-normal">
                                Payment Verified
                              </p>
                            </div>
                            <div className=" flex gap-1 items-center h-fit">
                              <div className="flex items-center text-[#e7bd19]">
                                <LiaStarSolid className="text-xs" />
                                <LiaStarSolid className="text-xs" />
                                <LiaStarSolid className="text-xs" />
                                <LiaStarSolid className="text-xs" />
                                <LiaStarSolid className="text-xs" />
                              </div>
                              <p className="text-[8px] font-normal">
                                {job.client.totalSpent}
                              </p>
                            </div>
                            <div className="flex gap-1 items-center h-fit">
                              <FaCircleUser className="text-xs text-[#0D074D]" />
                              <p className="text-[8px] font-normal">
                                {job.client.id}
                              </p>
                            </div>
                            <div className="flex gap-1 items-center h-fit">
                              <FaLocationDot className="text-xs text-[#0D074D]" />
                              <p className="text-[8px] font-normal">
                                {job.client.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Saved Jobs" && (
              <div className="overflow-y-scroll h-[90vh]">
                {savedJobs.length === 0 ? (
                  <div>No saved jobs yet.</div>
                ) : (
                  savedJobs.map((savedJobId) => {
                    const savedJob = jobs.find((job) => job.id === savedJobId);

                    return (
                      <div key={savedJob.id} className="saved-job">
                        <div className="w-[100%] p-3 my-3">
                          <div className="w-[95%] flex justify-between items-center text-[#737791]">
                            <div className="">
                              {savedJob.createdAt && (
                                <p className="text-[8px] font-normal">
                                  {new Date(
                                    savedJob.createdAt.seconds * 1000
                                  ).toLocaleString()}
                                </p>
                              )}

                              <h3 className="text-base font-semibold">
                                {savedJob.title}
                              </h3>
                              <p className="text-[8px] font-normal">
                                {savedJob.budget.estimatedHours}
                              </p>
                              <h5 className="text-[10px] font-medium w-96 truncate">
                                {savedJob.description}
                              </h5>
                            </div>
                            <div className="text-[#737791] w-56 flex flex-wrap gap-x-4 gap-y-2">
                              <div className="flex gap-1 items-center h-fit">
                                <MdVerified className="text-xs text-[#0D074D]" />
                                <p className="text-[8px] font-normal">
                                  Payment Verified
                                </p>
                              </div>
                              <div className=" flex gap-1 items-center h-fit">
                                <div className="flex items-center text-[#e7bd19]">
                                  <LiaStarSolid className="text-xs" />
                                  <LiaStarSolid className="text-xs" />
                                  <LiaStarSolid className="text-xs" />
                                  <LiaStarSolid className="text-xs" />
                                  <LiaStarSolid className="text-xs" />
                                </div>
                                <p className="text-[8px] font-normal">
                                  {savedJob.client.totalSpent}
                                </p>
                              </div>
                              <div className="flex gap-1 items-center h-fit">
                                <FaCircleUser className="text-xs text-[#0D074D]" />
                                <p className="text-[8px] font-normal">
                                  {savedJob.client.id}
                                </p>
                              </div>
                              <div className="flex gap-1 items-center h-fit">
                                <FaLocationDot className="text-xs text-[#0D074D]" />
                                <p className="text-[8px] font-normal">
                                  {savedJob.client.location}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindWork;

