import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { GiCloudUpload } from "react-icons/gi";

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

const ImageUploader = ({ image, setImage, formData, onImageUpload ,skills }) => {
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    e.target.value = null;
  };

  const handleUpload = () => {
    if (image) {

      if (!image || formData.title.trim() === "" || formData.description.trim() === "" || skills.length === 0) {
        alert("Please fill in all required fields.");
        return;
      }
      const uploadTask = storage.ref(`images/${image.name}`).put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function
        },
        (error) => {
          console.error(error);
        },
        () => {
          // complete function
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              // Call onImageUpload with the URL
              onImageUpload(url);
              console.log("Image URL added to FormData:", url);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
            });
        }
      );
    }
  };

  return (
    <div className=" w-full ">
      <div className="w-[48%] mt-6 p-8 bg-white shadow-md rounded-lg focus:shadow-lg border-dashed border border-[#7b747e] flex flex-col justify-center items-center">
        {!image && (
          <GiCloudUpload className="text-6xl text-[#151D48] text-center" />
        )}
        <label htmlFor="image" className="block cursor-pointer">
          <input
            type="file"
            id="image"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <div
            className="rounded-md flex items-center justify-center cursor-pointer"
            onClick={(e) =>{e.preventDefault(); document.getElementById("image").click()}}
          >
            {image ? (
              <img
                id="image-preview"
                src={URL.createObjectURL(image)}
                alt="Selected"
                className="w-full h-auto"
              />
            ) : (
              <span className="text-[#49454F] text-base">Click to Upload</span>
            )}
          </div>
        </label>
      </div>
      {image && (
        <button
          className="bg-[#5D5FEF] text-white text-sm px-4 py-2 mt-4 rounded-md"
          onClick={handleUpload}
       
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default ImageUploader;
