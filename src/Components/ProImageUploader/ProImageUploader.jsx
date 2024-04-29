import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { GiCloudUpload } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";


// Initialize Firebase (you should replace this with your Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyBIOt1C0L9e82ACdQy4A4Gbp5HW6NLWWks",
  authDomain: "waseem-2-4c056.firebaseapp.com",
  projectId: "waseem-2-4c056",
  storageBucket: "waseem-2-4c056.appspot.com",
  messagingSenderId: "653699414802",
  appId: "1:653699414802:web:18ccb768440e40e2f811cb",
  measurementId: "G-8VP78FPVHS"
};



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

const ProImageUploader = ({
  onImageUpload,
  selectedImage,
  setSelectedImage,
  proData,
}) => {
  const [uploading, setUploading] = useState(false);
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
    e.target.value = null;
  };

  const handleUpload = () => {
    if (selectedImage) {
      setUploading(true);
      const uploadTask = storage
        .ref(`images/${selectedImage.name}`)
        .put(selectedImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function
          setUploading(false);
        },
        (error) => {
          console.error(error);
          setUploading(false);
        },
        () => {
          // complete function
          storage
            .ref("images")
            .child(selectedImage.name)
            .getDownloadURL()
            .then((url) => {
              // Call onImageUpload with the URL
              onImageUpload(url);
              console.log("Image URL added to profiles:", url);
              setUploading(false);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
              setUploading(false);
            });
        }
      );
    }
  };
  console.log("Profile Data in ProimageUploader:", proData);

  return (
    <div className="flex flex-col relative">
      {!uploading && selectedImage && (
        <button
          className="absolute top-[-25px] right-[30px] text-black text-[10px]"
          onClick={handleUpload}
        >
          <FaCheck className="text-base" />
        </button>
      )}
      <div className="w-[90px] h-[90px] overflow-hidden bg-white rounded-full focus:shadow-lg border-dashed border border-[#7b747e] flex flex-col justify-center items-center">
        <label htmlFor="image" className="block cursor-pointer w-full h-full">
          <input
            type="file"
            id="image"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <div
            className="w-full h-full object-cover"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("image").click();
            }}
          >
            <img
              id="image-preview"
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : proData?.photoURL
                  
              }
              alt="Selected"
              className="w-full h-full object-cover bg-cover"
              />
              {console.log("Hello Wasim Baie" ,proData.imageURl)}
            {selectedImage && (
              <GiCloudUpload className="text-[9px] text-[#151D48] text-center" />
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default ProImageUploader;
