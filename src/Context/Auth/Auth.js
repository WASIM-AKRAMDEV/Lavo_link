import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth, db } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { setDoc, doc, getDoc } from "firebase/firestore";

// Function to add user collection in Firestore
// Function to add data to Firestore

// Create context
export const AuthContext = createContext();

// Create Auth Provider
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUserUid, setCurrentUserUid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({ email: null, password: null });
   
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUserUid(user?.uid)
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Initialize Firebase authentication
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in successfully", user);
      localStorage.setItem("loggedIn", true);
      
      navigate("/");
    } catch (error) {
      console.log(error.message);
      if (error.code === "auth/invalid-email") {
        setErrors({ ...errors, email: "Invalid Email", password: null });
      } else if (error.code === "auth/wrong-password") {
        setErrors({
          ...errors,
          password: "Invalid Password",
          email: null,
        });
      } else {
        // Handle other types of errors if needed
        console.error("Firebase error:", error);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem("loggedIn", true);
  
      // Check if the user already exists in Firestore
      const userRef = doc(db, "users", user.uid);
      const docSnapshot = await getDoc(userRef);
      if (docSnapshot.exists()) {
        console.log("User already exists in Firestore");
      } else {
        // Define the user data to store
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "",
          photoURL: user.photoURL || "",
          createdAt: new Date(),
        };
        
        // Set the user data in Firestore
        await setDoc(userRef, userData);
        console.log("User data set in Firestore");
      }
      
      navigate("/");
      console.log("wasim akram here in auth file", user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
      // Handle errors or set state to display error messages
    }
  };
  

  const signInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in with Facebook:", user);
  
      localStorage.setItem("loggedIn", true);
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Facebook:", error);
      // Handle errors or set state to display error messages
    }
  };

  //   const signOut = async () => {
  //     try {
  //       await firebase.auth().signOut();
  //       setCurrentUser(null);
  //       localStorage.removeItem('currentUser');
  //     } catch (error) {
  //       console.error('Error signing out:', error);
  //     }
  //   };




  return (
    <AuthContext.Provider
      value={{
        currentUserUid,
        loading,

        handleSubmit,
        signInWithGoogle,
        signInWithFacebook,
        errors: errors,
        setErrors: setErrors,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
