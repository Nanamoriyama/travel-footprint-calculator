import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFpnhgScfieEzvBRuIsVMLIRvb2M3u0nE",
  authDomain: "travel-footprint-calculator.firebaseapp.com",
  projectId: "travel-footprint-calculator",
  storageBucket: "travel-footprint-calculator.appspot.com",
  messagingSenderId: "66900748105",
  appId: "1:66900748105:web:91f4e4ea57f9df6dd2dc98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
