// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const apiKey = "AIzaSyB6kdzOs-pa4A2DR2Z1NybReghqiV2u8Xo";
const authDomain = "shafiq-law-chamber.firebaseapp.com";
const projectId = "shafiq-law-chamber.firebaseapp.com";
const storageBucket = "shafiq-law-chamber.appspot.com";
const messagingSenderId = "1068878223129";
const appId = "1:1068878223129:web:267976f3bb94610652d788";
const measurementId = "G-Z0NPMD0F6J";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
