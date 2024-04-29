import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { FiPlusCircle } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { TailSpin } from 'react-loader-spinner';
import { OrderContext } from "../../Context/Order";
import { ethers } from "ethers";
import abi from '../../Contract/abi/abi.json'
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
const GigDetail = () => {
  const {OrdersData,setOrdersData}=useContext(OrderContext)
  let orders;

  const initializePaymentHandler=async()=>{
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract=new ethers.Contract("0xB5CACb6aC2A321710AeececC0Fb40625b404F646",abi,signer)
    const payment=ethers.parseEther("0.0085")
    await contract.initializePayment(payment,{value:payment})
    orders=OrdersData
    orders.push(gigData)
    setOrdersData(orders)
    console.log("Order Data",OrdersData)
    console.log("Orders",orders)
    
  }
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const serviceDetails = [
    {
      title: "Delivery Time",
      value: "1 Day",
      valuesec: "2 Day",
      valuethird: "2 DAY",
    },
    {
      title: "Number of Revisions",
      value: "4",
      valuesec: "6",
      valuethird: "7",
    },
    {
      title: "Number of Initial Concepts",
      value: "2",
      valuesec: "4",
      valuethird: "4",
    },
    {
      title: "Printable Resolution File",
      value: "yes",
      valuesec: "yes",
      valuethird: "yes",
    },
    {
      title: "Logo Transparency",
      value: "yes",
      valuesec: "yes",
      valuethird: "yes",
    },
    { title: "3D Mockup", value: "no", valuesec: "no", valuethird: "yes" },
    { title: "Source Files", value: "no", valuesec: "yes", valuethird: "yes" },
    { title: "Vector File", value: "yes", valuesec: "yes", valuethird: "yes" },
  ];
  const { gigId } = useParams();
  const [gigData, setGigData] = useState(null);

  
  useEffect(() => {
    const fetchDataByID = async (id) => {
      try {
        const db = getFirestore();
        const docRef = doc(db, "gigs", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setGigData(docSnap.data());
          setLoading(false);
        } else {
          console.log("No such gig!");
        }
      } catch (error) {
        console.error("Error fetching gig data:", error);
      }
    };

    fetchDataByID(gigId);
  }, [gigId]);

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
    <div className="my-10 mx-auto px-2 sm:px-2 lg:px-2 max-w-[1250px] flex justify-between ">
      {gigData && (
        <div className="max-w-[60%] w-full ">
          <div className="px-3">
            <h1 className="text-[#151D48] text-[30px] font-medium my-3">
              {gigData.title}
            </h1>
            <div className="flex gap-2 text-[#151D48] text-sm font-normal my-4">
              {gigData?.skills?.map((skill) => (
                <p className="flex items-center gap-2">
                  {skill}{" "}
                  <MdOutlineDoubleArrow className="text-[#737791] text-sm" />
                </p>
              ))}
            </div>
          </div>
          <div className="w-full h-96 overflow-hidden">
            <img
              src={gigData.image}
              className="w-full h-full rounded-xl"
              alt=""
            />
          </div>

          <div className="relative w-full p-2 py-6 ">
            <TbEdit className="text-[#737791] text-2xl absolute right-6 top-6" />
            <FiPlusCircle className="text-[#737791] text-2xl absolute right-14 top-6" />

            <h4 className="text-lg font-medium text-[#151D48] my-4">
              Project details
            </h4>
            <p className="text-sm font-light my-4">{gigData.description}</p>

            <div className="flex gap-4 mt-8 mb-2">
              <Link
                to="#"
                className="bg-[#5D5FEF] rounded-lg text-white text-base px-5 py-1 "
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-[38%] h-fit w-full border border-[#d6e3d9] rounded-2xl px-6 py-2 sticky top-28 mt-[105px]">
        <h3 className="text-lg font-medium my-5">Select a Service</h3>
        <Tab.Group>
          <Tab.List className="flex justify-between text-[#151D48]">
            <Tab
              className={`px-3 flex flex-col items-center font-medium border-l-2 ${
                selectedIndex === 0 ? "border-[#151D48]" : "border-white"
              }`}
              onClick={() => setSelectedIndex(0)} // Set selectedIndex to 0 when clicked
            >
              BASIC
              <span className="font-semibold text-base">$30</span>
            </Tab>
            
            
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="py-10 ">
              <ul className="w-full list-disc">
                {serviceDetails.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-sm my-1 font-light"
                  >
                    <h5>{item.title}</h5>
                    <p>{item.value}</p>
                  </li>
                ))}
              </ul>

              <button onClick={()=>initializePaymentHandler()} className="bg-[#5D5FEF] rounded-lg text-white text-sm px-4 py-2 mt-10">
                Continue with $30
              </button>
            </Tab.Panel>
            
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default GigDetail;
