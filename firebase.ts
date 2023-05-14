// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
//const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
//const db = getFirestore(app);



// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAifZU45Vl4_8PxODfT2edJlDMlbQJ0VHI",
  authDomain: "projectl-35b63.firebaseapp.com",
  projectId: "projectl-35b63",
  storageBucket: "projectl-35b63.appspot.com",
  messagingSenderId: "403932263714",
  appId: "1:403932263714:web:da6dc6739d364296f9217b",
  measurementId: "G-SSL1DSX4XW"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app);

export {db};