import React, { useState, useEffect, useContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { provider} from "../../FirebaseConfig";
import { AuthContext } from "../../Context/Auth/Auth";


const SignUp = () => {
  const {
 
    signInWithGoogle,
    signInWithFacebook,
   
  } = useContext(AuthContext);
  const navigate = useNavigate();

  
  const [errors, setErrors] = useState({ email: null, password: null });

  useEffect(() => {
    let SignUp = localStorage.getItem("SignUp");
    if (SignUp) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Initialize Firebase authentication
    const auth = getAuth();
    // signUp
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(user, "User signed in successfully");
        localStorage.setItem("loggedIn", true);
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setErrors({ ...errors, email: "Email already in use" });
        }
        if (error.code === "auth/weak-password") {
          setErrors({
            ...errors,
            password: "Password should be at least 6 characters",
          });
        }
      });
  };

  // const signInwithGoogle = () => {
  //   const auth = getAuth();
  //   signInWithPopup(auth, provider)
  //     .then(async (result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;

  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //       // await updateDoc(doc(database, "profile", "IF7KyLY3v7plAay5NXWV"), {
  //       //   profileName: user.displayName,
  //       //   imageUrl: user.photoURL,
  //       // });

  //       console.log(token, user);
  //       localStorage.setItem("loggedIn", true);
       
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       if (error.code === "auth/email-already-in-use") {
  //         setErrors({ ...errors, email: "Email already in use" });
  //       }
  //       if (error.code === "auth/weak-password") {
  //         setErrors({
  //           ...errors,
  //           password: "Password should be at least 6 characters",
  //         });
  //       }
  //     });
  // };
  // // signin with facebook
  // const handleSignInWithFacebook = () => {
  //   const auth = getAuth();
  //   const provider = new FacebookAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // Successful sign-in
  //       const user = result.user;
  //       console.log("User signed in with Facebook:", user);
  //       localStorage.setItem("loggedIn", true);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       // Handle errors
  //       console.error("Error signing in with Facebook:", error);
  //       // You can provide specific error messages to the user based on error.code
  //       // For example:
  //       // if (error.code === "auth/account-exists-with-different-credential") {
  //       //   alert("An account already exists with the same email address but different sign-in credentials. Try signing in with a different method.");
  //       // }
  //     });
  // };

  const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleToggleConfirmPassword = () => {
  //   setShowConfirmPassword(!showConfirmPassword);
  // };

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  // const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusPassword = () => {
    setIsPasswordFocused(true);
  };

  const handleBlurPassword = () => {
    setIsPasswordFocused(false);
  };

  // const handleFocusConfirmPassword = () => {
  //   setIsConfirmPasswordFocused(true);
  // };

  // const handleBlurConfirmPassword = () => {
  //   setIsConfirmPasswordFocused(false);
  // };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <section className="flex w-full">
      <div className="flex justify-center items-center w-full">
        <form
          className="text-center px-[70px] max-sm:px-[60px]"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex items-center justify-center ">
            <a href="#" className="font-semibold text-[#151D48] w-32">
              <img src="/assets/images/Lavolink-logo.png" alt="" />
            </a>
          </div>
          <h4 className="capitalize text-[#221d59] text-6xl leading-[98px] font-semibold max-lg:text-[60px] max-lg:leading-[90px] max-md:text-[50px] max-md:leading-[80px] max-sm:text-[40px] max-sm:leading-[70px]">
            hello
          </h4>
          <p className="capitalize text-[#221d59] text-sm leading-[22.5px] font-normal text-center max-lg:text-[12px] max-md:text-[14px] max-sm:text-[12px]">
            Login page design should be easy to understand and require no
            thought from the user.
          </p>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="border-2 border-black-600 mt-10 rounded-md w-full py-4 px-2 text-sm focus:border-[#6750a4] outline-none focus:outline-none"
            />
            <span
              className={`absolute top-8 left-4 bg-white px-2 text-sm ${
                isFocused ? "text-[#6750a4]" : "text-black"
              }`}
            >
              Email
            </span>
            <p className="text-red-500 text-sm text-start pt-1">
              {errors.email}
            </p>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
              onFocus={handleFocusPassword}
              onBlur={handleBlurPassword}
              className="border-2 border-black-600 mt-10 rounded-md py-4 px-2 text-sm w-full focus:border-[#6750a4] outline-none"
            />
            <div
              className="absolute top-[58px] right-2 text-lg cursor-pointer"
              onClick={handleTogglePassword}
            >
              {showPassword ? <IoEye /> : <IoEyeOff />}
            </div>
            <span
              className={`absolute top-8 left-4 bg-white px-2 text-sm ${
                isPasswordFocused ? "text-[#6750a4]" : "text-black"
              }`}
            >
              Password
            </span>
            <p className="text-red-500 text-sm text-start pt-1">
              {errors.password}
            </p>
          </div>
          {/* <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Your Password"
              onFocus={handleFocusConfirmPassword}
              onBlur={handleBlurConfirmPassword}
              className="border-2 border-black-600 mt-10 rounded-md py-4 px-2 text-sm w-full focus:border-[#6750a4] outline-none"
            />
            <div
              className="absolute top-[58px] right-2 text-lg cursor-pointer"
              onClick={handleToggleConfirmPassword}
            >
              {showConfirmPassword ? <IoEye /> : <IoEyeOff />}
            </div>
            <span
              className={`absolute top-8 left-4 bg-white px-2 text-sm ${
                isConfirmPasswordFocused ? "text-[#6750a4]" : "text-black"
              }`}
            >
              Confirm Password
            </span>
          </div> */}

          <button className="mt-5 rounded-[42px] leading-[55px] w-[170px] border-2 border-[#221d59] text-[#221d59] font-semibold text-2xl hover:bg-[#221d59] hover:text-white">
            SIGN UP
          </button>
          <p className="py-6">OR</p>
          <div
            onClick={signInWithGoogle}
            className="flex align-center justify-center border-2 border-[#9a979e] pt-3 pb-3 mb-5 cursor-pointer"
          >
            <img src="./assets/images/googleIcon.svg" alt="" />
            <span className="capitalize pl-6 mt-2">continue with google</span>
          </div>
          <div className="flex justify-between max-sm:block">
            <div className="flex align-center justify-center border-2 border-[#9a979e] pt-3 pb-3 mb-5 w-full cursor-pointer">
              <img src="./assets/images/appleIcon.svg" alt="" />
              <span className="capitalize pl-6 mt-2">apple</span>
            </div>
            <div
              onClick={signInWithFacebook}
              className="flex align-center justify-center border-2 border-[#9a979e] pt-3 pb-3 w-full mb-5 ml-5 cursor-pointer max-sm:ml-0"
            >
              <img src="./assets/images/facebookIcon.svg" alt="" />
              <span className="capitalize pl-6 mt-2">facebook</span>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full max-md:hidden">
        <img
          className="w-full h-full"
          src="./assets/images/image1.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default SignUp;
