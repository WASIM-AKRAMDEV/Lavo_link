import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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
const database = getAuth(app);
const provider = new GoogleAuthProvider();
export  { database, provider};
