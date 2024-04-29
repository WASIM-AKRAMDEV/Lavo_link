import React, { useState, useEffect, useContext } from "react";
import { Fragment } from "react";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { PiSignOutBold } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import { ethers } from "ethers";
import { signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { AuthContext } from "../../Context/Auth/Auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIOt1C0L9e82ACdQy4A4Gbp5HW6NLWWks",
  authDomain: "waseem-2-4c056.firebaseapp.com",
  projectId: "waseem-2-4c056",
  storageBucket: "waseem-2-4c056.appspot.com",
  messagingSenderId: "653699414802",
  appId: "1:653699414802:web:18ccb768440e40e2f811cb",
  measurementId: "G-8VP78FPVHS",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

const navigation = [
  { name: "Find Work", current: true, path: "/" },
  {
    name: "My Jobs",
    current: false,
    dropdown: true,
    path: "/myJobs",
  },
  { name: "Order", current: false, path: "/order" },
  { name: "Post Jobs", current: false, path: "/postjobs" },
  { name: "Messages", current: false, path: "/messages/firstPage" },
  { name: "Your Orders", current: false, path: "/Yourorder" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { currentUserUid } = useContext(AuthContext);
  const [walletAddress, setWalletAddress] = useState();
  const [profileData, setProfileData] = useState({});
  console.log(profileData);

  const location = useLocation();
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      if (signer) {
        localStorage.setItem("wallAddr", signer.address);
      } else {
        localStorage.setItem("wallAddr", "");
      }
    } else {
      alert("Wallet Not Found");
    }
  };
  useEffect(() => {
    setWalletAddress(localStorage.getItem("wallAddr"));
  }, [localStorage.getItem("wallAddr")]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (currentUserUid) {
          const db = getFirestore();
          const profileDocRef = doc(db, "users", currentUserUid);
          const unsubscribe = onSnapshot(profileDocRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
              const data = docSnapshot.data();
              setProfileData(data);
            } else {
              console.log("No such document!");
            }
          });

          // Return the unsubscribe function to clean up the listener when the component unmounts
          return () => unsubscribe();
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  ////////////////////////////////

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        console.log("User signed out successfully");
        navigate("/sign-in");
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };

  return (
    <Disclosure
      as="nav"
      className="bg-[#fff] sticky top-0 left-0 w-full z-10 shadow"
    >
      {({ open }) => (
        <>
          <div className="mx-auto  px-2 sm:px-2 lg:px-2 max-w-[1550px]">
            <div className="relative flex h-24 items-center justify-between">
              <div className="relative inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 lg:items-center lg:justify-center sm:items-stretch sm:justify-start justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="#" className="font-semibold text-[#151D48] w-32">
                    <img src="/assets/images/Lavolink-logo.png" alt="" />
                  </a>
                </div>
                <div className="hidden lg:ml-2 sm:ml-6 lg:block w-full">
                  <div className="flex items-center">
                    {navigation.map((item) => (
                      <div key={item.name} className="relative ">
                        <NavLink
                          key={item.name}
                          to={item.path}
                          className={`text-[#737791] rounded-md px-3 py-2 font-normal xl:text-base lg:text-sm md:text-sm lg:p-2 ${
                            location.pathname === item.path
                              ? "font-semibold text-[#151D48]"
                              : "text-[#737791] font-normal"
                          }`}
                        >
                          {item.name}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="relative rounded-lg  hidden lg:block bg-[#f9fafb]">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                    <span className="text-[#5D5FEF] text-xl">
                      <IoSearch />
                    </span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md  border-0 py-3 pl-10 xl:pr-36 bg-[#f9fafb] lg:pr-0  ring-gray-300 placeholder:text-[#737791] placeholder:text-base lg:placeholder:text-sm focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search here..."
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto lg:ml-2 sm:ml-4 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-lg bg-[#f9fafb] text-[#5D5FEF] p-3  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
                >
                  <span className="absolute -inset-1.5" />
                  <span className="bg-[#14A700] w-2 h-2 absolute right-1 top-1 rounded-full"></span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <h2 className="truncate w-20">{walletAddress}</h2>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div className="">
                    <Menu.Button className="flex gap-4 mr-3 lg:mr-1 ">
                      <div className="relative w-12 h-12  flex rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ">
                        <span className="absolute -inset-1.5" />
                        <span className="bg-[#14A700] w-[15px] h-[15px]  absolute right-[-4px] top-[-4px] rounded-full border-2 border-white"></span>
                        {/* Set the profile image here */}
                        <img
                          className="h-full w-full rounded-full "
                          src={profileData.photoURL}
                          alt="Profile"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-center">
                          <h5 className="text-sm text-[#151D48] font-medium">
                            {profileData.displayName}
                          </h5>
                          <IoIosArrowDown className="text-sm" />
                        </div>
                        <p className=" text-xs text-[#737791] font-normal">
                          {/* {profileData.profileTitle} */}
                        </p>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute flex justify-center items-center flex-col right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-5 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className="relative w-14 h-14  flex rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
                          >
                            <img
                              className="h-full w-full rounded-lg "
                              src={profileData.photoURL}
                              alt="Profile"
                            />
                          </a>
                        )}
                      </Menu.Item>
                      <h5 className="text-[#737791] text-xs my-2">
                        {profileData.displayName}
                      </h5>
                      <div className="flex gap-1 py-2">
                        <button className="bg-[#5D5FEF] text-white font-normal text-sm px-[15px] py-[2px] rounded">
                          Online
                        </button>
                        <Link
                          to="/profile"
                          className="bg-[#F5F5F5] text-[#737791] font-normal text-sm px-[15px] py-[2px] rounded"
                        >
                          Profile
                        </Link>
                      </div>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "px-4 py-2 text-sm text-gray-700 flex items-center gap-2"
                            )}
                          >
                            <MdOutlineSettings className="text-lg" /> Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            onClick={handleLogout}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "px-4 py-2 text-sm text-gray-700 flex items-center gap-2"
                            )}
                          >
                            <PiSignOutBold className="text-xl" />
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "px-4 py-2 text-sm text-gray-700 flex items-center gap-2"
                            )}
                          >
                            <GiWallet
                              className="text-xl"
                              onClick={() => {
                                connectWallet();
                              }}
                            />
                            Add wallet
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  as="a"
                  to={item.path}
                  className="text-[#737791] hover:bg-[#151D48] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
