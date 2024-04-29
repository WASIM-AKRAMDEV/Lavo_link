import React, { useState, useEffect, useContext } from "react";

import { FaLocationDot } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { VscLink } from "react-icons/vsc";
import { FiPlusCircle } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  updateDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import "firebase/compat/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import ProImageUploader from "../ProImageUploader/ProImageUploader";

import { AuthContext } from "../../Context/Auth/Auth";


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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const Prosidebar = () => {
  const {
    currentUserUid
   } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [profileTitle, setProfileTitle] = useState("");
  const [fromLocation, setFromLocation] = useState("United States");
  const [memberSince, setMemberSince] = useState("Mar, 2024");
  const [newText, setNewText] = useState("");
  const [additionalTexts, setAdditionalTexts] = useState([
    "Education",
    "Name of University",
    "BS Computer Science",
    "Name of University",
    "BS Computer Science",
  ]);
  const [languageText, setLanguageText] = useState("Language");
  const [languages, setLanguages] = useState([
    { language: "English", proficiency: "Fluent" },
    { language: "Spanish", proficiency: "Intermediate" },
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

  const [proData, setProData] = useState({});
  



  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (currentUserUid) {
          const db = getFirestore();
          const profileDocRef = doc(db, "users", currentUserUid);
          const unsubscribe = onSnapshot(profileDocRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
              const data = docSnapshot.data();
              setProData(data);
              setDisplayName(data.displayName); 
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

  console.log( "ProData in prosidebar:", proData)
  const saveProfileDataToFirestore = async (url) => {
    // Upload image to Firebase Storage
    const imageRef = ref(storage, `profile_images/${selectedImage}`);
    await uploadBytes(imageRef, selectedImage);
    // Save profile data to Firestore
    await updateDoc(doc(db, "users", currentUserUid), {
      displayName: displayName,
      profileTitle: profileTitle,
    });
    console.log("Profile name", displayName);
    console.log(url);
    console.log("Profile data uploaded to Firestore!");
  };


  
  const updateImageUrlInFirestore = async (photoURL) => {
    // Update image URL in Firestore
    await updateDoc(doc(db, "users", currentUserUid), {
      photoURL: photoURL,
    });
    console.log("Image URL updated in Firestore!");
  };

  const handleImageUpload = async (url) => {
    // Upload image to Firebase Storage
    const imageRef = ref(storage, `profile_images/${selectedImage}`);
    await uploadBytes(imageRef, selectedImage);
    // Update image URL in Firestore
    await updateImageUrlInFirestore(url);
    console.log(
      "Image uploaded to Firebase Storage and URL updated in Firestore:",
      url
    );
  };


 
  return (
    <div className="w-[23%]">
      <div className="bg-[#f9fafb] p-10 rounded-[19px] h-[246px] flex flex-col justify-between relative">
        <div className="flex justify-end items-center mb-3">
          <button
            onClick={() => setEditMode(!editMode)}
            className="bg-transparent border-none text-[#5D5FEF] text-sm"
          >
            {editMode ? (
              <FiPlusCircle
                className="text-[#737791] text-xl absolute right-6 top-3"
                onClick={saveProfileDataToFirestore}
              />
            ) : (
              <TbEdit className="text-[#737791] text-xl absolute right-6 top-3" />
            )}
          </button>
        </div>
        <div className="flex gap-3 items-center relative">
          <ProImageUploader
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            onImageUpload={handleImageUpload}
            proData={proData}
          />

          <div>
            <h3 className="text-xl font-semibold text-[#151D48]">
              {editMode ? (
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="text-xl font-semibold text-[#151D48] outline-none border-none bg-transparent"
                />
              ) : (
               proData.displayName
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
                  {text} <VscLink className="text-lg text-[#737791]" />
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
      <div className="bg-[#f9fafb] px-10 py-4 rounded-[19px] mt-3 relative">
        <ul className="p-0">
          <li className="text-sm text-[#737791] my-3">
            {editMode ? (
              <input
                type="text"
                value={languageText}
                onChange={(e) => setLanguageText(e.target.value)}
                className="text-sm text-[#737791] outline-none border-none bg-transparent"
              />
            ) : (
              languageText
            )}
          </li>
          {/* Editable language entries */}
          {languages.map((language, index) => (
            <li
              key={index}
              className="text-sm text-[#737791] flex items-center gap-4 my-2"
            >
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={language.language}
                    onChange={(e) => {
                      const updatedLanguages = [...languages];
                      updatedLanguages[index].language = e.target.value;
                      setLanguages(updatedLanguages);
                    }}
                    className="text-sm text-[#737791] outline-none border-none bg-transparent"
                  />
                  <input
                    type="text"
                    value={language.proficiency}
                    onChange={(e) => {
                      const updatedLanguages = [...languages];
                      updatedLanguages[index].proficiency = e.target.value;
                      setLanguages(updatedLanguages);
                    }}
                    className="text-sm text-[#737791] outline-none border-none bg-transparent"
                  />
                </>
              ) : (
                <>
                  {language.language}
                  <p className="font-light">{language.proficiency}</p>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Prosidebar;
