import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { VscLink } from "react-icons/vsc";
import { FiPlusCircle } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
// import { GiCloudUpload } from "react-icons/gi";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  updateDoc,
  doc,
  collection,
  getDocs,
  getDoc,
} from "firebase/firestore";
import "firebase/compat/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import ProImageUploader from "../ProImageUploader/ProImageUploader";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv-WSayywnOPYfS1zFf6e9_OVWnOfxDC4",
  authDomain: "signuplogin-e03e9.firebaseapp.com",
  databaseURL: "https://signuplogin-e03e9-default-rtdb.firebaseio.com",
  projectId: "signuplogin-e03e9",
  storageBucket: "signuplogin-e03e9.appspot.com",
  messagingSenderId: "675718779196",
  appId: "1:675718779196:web:3951e5694ceb8887180e39",
  measurementId: "G-KCGENMV7J1",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const Prosidebar = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileName, setProfileName] = useState(null);
  const [profileTitle, setProfileTitle] = useState("");
  const [fromLocation, setFromLocation] = useState("United States");
  const [memberSince, setMemberSince] = useState("Mar, 2024");
  const [photourl, setPhotourl] = useState(null);
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

  const [proData, setProData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const ProfileDocRef = doc(db, "profiles", "k8cqN13B5HM0QFNdxXGO");
        const docSnap = await getDoc(ProfileDocRef);
        if (docSnap.exists()) {
          const dataPro = { id: docSnap.id, ...docSnap.data() };
          setProData(dataPro);
          console.log("Profile Data:", dataPro);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching Profile data:", error);
      }
    };

    fetchData();
  }, []);
  const saveProfileDataToFirestore = async (url) => {
    // Upload image to Firebase Storage
    const imageRef = ref(storage, `profile_images/${selectedImage.name}`);
    await uploadBytes(imageRef, selectedImage);
    // Save profile data to Firestore
    await updateDoc(doc(db, "profiles", "k8cqN13B5HM0QFNdxXGO"), {
      profileName: profileName,
      profileTitle: profileTitle,
    });
    console.log(url);
    console.log("Profile data uploaded to Firestore!");
  };

  const updateImageUrlInFirestore = async (imageUrl) => {
    // Update image URL in Firestore
    await updateDoc(doc(db, "profiles", "k8cqN13B5HM0QFNdxXGO"), {
      imageUrl: imageUrl,
    });
    console.log("Image URL updated in Firestore!");
  };

  const handleImageUpload = async (url) => {
    // Upload image to Firebase Storage
    const imageRef = ref(storage, `profile_images/${selectedImage.name}`);
    await uploadBytes(imageRef, selectedImage);
    // Update image URL in Firestore
    await updateImageUrlInFirestore(url);
    console.log(
      "Image uploaded to Firebase Storage and URL updated in Firestore:",
      url
    );
  };

  const getFormattedProfileName = (name) => {
    const words = name.split(" ");
    const firstName = words[0];
    const lastNameInitial = words.length > 1 ? words[1].charAt(0) : "";
    return `${firstName} ${lastNameInitial}`;
  };

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      console.log(user);
      if (user) {
        console.log("User display name:", user.displayName);
        setProfileName(user.displayName);
        setPhotourl(user.photoURL);
      }
    });
  }, []);

  const auth = getAuth();
  updateProfile(auth.currentUser, {
    profileName: profileName,
    imageUrl: photourl,
  })
    .then(async() => {
      // Profile updated!
      await updateDoc(doc(db, "profiles", "k8cqN13B5HM0QFNdxXGO"), {
        profileName: profileName,
        imageUrl: photourl,
      });
      
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

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
            <h3 className="text-2xl font-semibold text-[#151D48]">
              {editMode ? (
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="text-xl font-semibold text-[#151D48] outline-none border-none bg-transparent"
                />
              ) : (
                // getFormattedProfileName(profileName)
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
