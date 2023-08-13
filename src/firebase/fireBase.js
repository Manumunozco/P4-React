// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1EC8izrqdQunAMg-VYJxMru3_ijVzGxM",
  authDomain: "project-4-react.firebaseapp.com",
  projectId: "project-4-react",
  storageBucket: "project-4-react.appspot.com",
  messagingSenderId: "617529950134",
  appId: "1:617529950134:web:3db1ea8fe4111c37becb17"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const dataBase = app.firestore()