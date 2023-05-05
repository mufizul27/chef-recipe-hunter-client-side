// Import the functions you need from the SDKs you need
/*eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl1LkH4M36OqPaYQRemS3uzrkl-N1vmAY",
  authDomain: "bangladesh-food-recipe.firebaseapp.com",
  projectId: "bangladesh-food-recipe",
  storageBucket: "bangladesh-food-recipe.appspot.com",
  messagingSenderId: "583678778222",
  appId: "1:583678778222:web:bd772a5fa940779366bf7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  default app;