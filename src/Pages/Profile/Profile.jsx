import React, { useState, useEffect } from "react";
import Prosidebar from "../../Components/Prosidebar/Prosidebar";
import Slider from "../../Components/Slider/Slider";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { LiaStarSolid } from "react-icons/lia";
import { FaLocationDot } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
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

const Profile = () => {
  const [jobs, setJobs] = useState([]);
  const [gigData, setGigData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const jobCollection = query(
        collection(db, "jobs"),
        orderBy("createdAt"),
        limit(6)
      ); // Replace "jobs" with your Firestore collection name
      const snapshot = await getDocs(jobCollection);
      const jobData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJobs(jobData);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Gigs data fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const gigCollection = collection(db, "gigs");
        const snapshot = await getDocs(gigCollection);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGigData(data);
     
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gig data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
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
    <div className="">
      <Slider />
      <div className="my-10 mx-auto px-2 sm:px-2 lg:px-2 max-w-[1550px] flex xl:gap-4 2xl:gap-12">
        <Prosidebar  />
        <div className="max-w-[1100px] w-full">
          <div className="w-full border-b border-[#E7E7E7] pb-5">
            <div className="text-[#151D48] w-[80%]">
              <h1 className="text-2xl font-semibold">
                Web Developer | Graphic Designer | Blockchain Developer
              </h1>
              <h3 className="text-lg my-2">Description</h3>
              <p className="text-xs">
                Welcome to LavoLink: Where Talent Meets Opportunity At LavoLink,
                we're committed to revolutionizing the way freelancers and
                clients connect, collaborate, and succeed. Our platform is
                designed to empower freelancers to showcase their skills, find
                exciting projects, and build lasting relationships with clients
                from around the globe. Whether you're a seasoned professional or
                just starting your freelancing journey, LavoLink provides the
                tools and support you need to thrive in today's digital economy.
                Diverse Opportunities explore a wide range of freelance projects
                across industries, from web development and graphic design to
                writing, marketing, and more. With LavoLink, you'll never be
                short of opportunities to showcase your talents and expand your
                portfolio. Flexible Work Arrangements: Say goodbye to the
                traditional 9-to-5 grind. LavoLink offers flexible work
                arrangements, allowing you to choose projects that align with
                your schedule and lifestyle. Work from anywhere, at any time,
                and take control of your freelancing career. Secure Payments:
                Rest assured that you'll always be compensated fairly for your
                hard work. LavoLink prioritizes secure payment processing,
                ensuring that freelancers receive timely payments for their
                completed projects. Say goodbye to payment delays and
                uncertainties.
              </p>
            </div>
          </div>
          <div className="my-4">
            {jobs.map((job) => (
              <div key={job.id} className="w-[95%]  text-[#737791] my-4">
                <div className="">
                  <h3 className="text-base font-semibold">{job.title}</h3>
                  <p className="text-[8px] font-normal my-1">
                    {job.budget.estimatedHours}
                  </p>
                  <h5 className="text-[10px] font-normal w-96 truncate">
                    {job.description}
                  </h5>
                  <p className="text-[10px] font-normal">Highly recommended</p>
                </div>
                <div className="text-[#737791] flex flex-wrap gap-5 mt-2">
                  <div className=" flex gap-1 items-center h-fit">
                    <div className="flex items-center text-[#e7bd19]">
                      <LiaStarSolid className="text-xs" />
                      <LiaStarSolid className="text-xs" />
                      <LiaStarSolid className="text-xs" />
                      <LiaStarSolid className="text-xs" />
                      <LiaStarSolid className="text-xs" />
                    </div>
                  </div>
                  <div className="flex gap-1 items-center h-fit">
                    <FaCircleUser className="text-xs text-[#0D074D]" />
                    <p className="text-[8px] font-normal">{job.client.id}</p>
                  </div>
                  <div className="flex gap-1 items-center h-fit">
                    <FaLocationDot className="text-xs text-[#0D074D]" />
                    <p className="text-[8px] font-normal">
                      {job.client.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full border-t border-[#E7E7E7] relative pt-5">
            <TbEdit className="text-[#737791] text-xl absolute right-6 top-5" />
            <FiPlusCircle className="text-[#737791] text-xl absolute right-12 top-5" />
            <h2 className="text-[#151D48] text-2xl font-semibold">
              Project Catalogue
            </h2>
            <div className="flex flex-wrap gap-x-5 my-8 ">
              {gigData.map((gig, idx) => (
                <div  key={idx} className="max-w-[350px] w-full bg-[#f9fafb] rounded-xl overflow-hidden mt-4 shadow-lg">
                  <div className="w-full rounded-xl object-cover h-52">
                    <img src={gig.image} className="rounded-xl w-full h-full" alt=""  />
                  </div>
                  <div className="relative w-full px-4 py-6 ">
                    <TbEdit className="text-[#737791] text-xl absolute right-6 top-4" />
                    <FiPlusCircle className="text-[#737791] text-xl absolute right-12 top-4" />
                    <h4 className="text-[#737791] text-[14px] font-medium">
                      {gig.title}
                    </h4>
                    <div className="flex gap-3 text-[#737791] text-xs font-light my-3">
                      {gig?.skills?.map((skill, idx) => (
                        <p key={idx} className="w-20 truncate">{skill}</p>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Link
                        to="#"
                        className="bg-[#5D5FEF] rounded-md hover:bg-[#e4e4e4] hover:text-[#737791] transition text-white text-xs px-3 py-1"
                      >
                        Place Order
                      </Link>
                      <Link
                        to={`/gigdetail/${gig.id}`}
                        className="bg-[#e4e4e4] rounded-md text-[#737791] hover:bg-[#5D5FEF] hover:text-white text-xs px-3 py-1"
                      >
                        Detail
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <Link to="/gigupload" className="max-w-[350px] w-full h-[46vh] bg-[#f9fafb] rounded-xl overflow-hidden mt-4 flex justify-center items-center shadow-lg">
              <div className="flex flex-col justify-center items-center">
              <FaCirclePlus  className="text-[#151D48] text-7xl" />
              <h3  className="my-3">Create a new Gig</h3>
              </div>
               
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
