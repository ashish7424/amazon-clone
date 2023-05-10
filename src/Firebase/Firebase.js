import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import getFirestore from 'firebase/firestore'

 //amazon clone 
const firebaseConfig = {
  apiKey: "AIzaSyDELnm94qjMLXRF71GZCx6mTaUEVi5GSZ8",
  authDomain: "clone-a68e5.firebaseapp.com",
  projectId: "clone-a68e5",
  storageBucket: "clone-a68e5.appspot.com",
  messagingSenderId: "523560486050",
  appId: "1:523560486050:web:7b9fa61950d75a549283fb",
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
// const db=getFirestore(app)