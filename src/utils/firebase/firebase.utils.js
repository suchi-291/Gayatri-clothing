import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFBexzpJDP_CmCaCqi3PB82tEXzbAcdMs",
  authDomain: "crystal-clothing-db.firebaseapp.com",
  projectId: "crystal-clothing-db",
  storageBucket: "crystal-clothing-db.appspot.com",
  messagingSenderId: "329917172891",
  appId: "1:329917172891:web:c663af77eccd7346a74a3e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
