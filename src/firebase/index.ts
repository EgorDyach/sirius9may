import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAvnpxq6F-bvg8TrpuZTMLoC1c9E-IfMRY",
  authDomain: "sirius9may.firebaseapp.com",
  projectId: "sirius9may",
  storageBucket: "sirius9may.appspot.com",
  messagingSenderId: "454045004406",
  appId: "1:454045004406:web:b34b2f5e8fdffb715fe557"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
