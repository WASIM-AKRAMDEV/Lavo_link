import React, { useState } from "react";
import { initializeApp, setLogLevel } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import AddSkill from "../../Components/AddSkill/AddSkill";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";

// Set log level to suppress warnings
setLogLevel("error");

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
const storage = getStorage(app);
export { app, db, storage };

// Function to upload gigs to Firestore
const uploadGigsToFirestore = async (gigData) => {
  try {
    await addDoc(collection(db, "gigs"), gigData);
    console.log("Gig has been uploaded successfully.");
  } catch (error) {
    console.error("Error uploading Gig:", error);
  }
};

const GigUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: [],
    image: "",
  });
  const [skills, setSkills] = useState([]);
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any required fields are empty
    if (
      formData.title.trim() === "" ||
      formData.description.trim() === "" ||
      skills.length === 0 ||
      !image
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Upload data to Firestore
    await uploadGigsToFirestore(formData);

    // Clear the form after successful submission
    setFormData({
      title: "",
      description: "",
      skills: [],
      image: "",
    });

    // Clear the skills
    setSkills([]);
    // Clear the image
    setImage(null);
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleImageUpload = (imageUrl) => {
  setFormData({ ...formData, image: imageUrl });

  // Call uploadGigsToFirestore only after setting the image URL
  uploadGigsToFirestore({ ...formData, image: imageUrl }, () => {
    // Clear text fields after successful upload
    setFormData({
      title: "",
      description: "",
      skills: [],
      image: imageUrl, // Keep the image URL
    });
  });
};

  return (
    <div className="my-14 mx-auto px-2 sm:px-2 lg:px-2 max-w-[1100px]">
      <form onSubmit={handleSubmit}>
        <div className="py-2 px-8">
          <h1 className="text-[#151D48] text-4xl font-medium mb-8">
            Project Overview
          </h1>

          <div className="flex justify-between flex-wrap">
            <div className=" max-w-[48%] w-full mt-5">
              <label htmlFor="#" className="px-1 text-base font-medium text-[#151D48]">Gig title</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={formData.title}
                className="border bg-white mt-1 rounded-lg w-full py-3 px-3 focus:border-[#6750a4] outline-none focus:outline-none focus:shadow-lg placeholder:text-[#49454F] text-base"
              />
              
            </div>
            {/* AddSkill component goes here */}
            <AddSkill
              skills={skills}
              setSkills={setSkills}
              formData={formData}
              setFormData={setFormData}
            />
            <div className="max-w-[100%] w-full mt-4">
            <label htmlFor="#" className="px-1 text-base font-medium text-[#151D48]">Description</label>
              <textarea
                name="description"
                type="text"
                value={formData.description}
                onChange={handleChange}
                className="border bg-white mt-1 h-[20vh] rounded-lg w-full py-3 px-3 focus:border-[#6750a4] focus:shadow-lg outline-none focus:outline-none text-base resize-none"
                placeholder="Add description"
              />
              
            </div>

            <ImageUploader
              image={image}
              setImage={setImage}
              formData={formData}
              onImageUpload={handleImageUpload}
              skills={skills}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default GigUpload;
