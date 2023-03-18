// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2GxhRQGib6cRZPOEHo_EiyY2SBJJO1xM",
  authDomain: "network-me-a73dd.firebaseapp.com",
  databaseURL: "https://network-me-a73dd-default-rtdb.firebaseio.com",
  projectId: "network-me-a73dd",
  storageBucket: "network-me-a73dd.appspot.com",
  messagingSenderId: "162661134430",
  appId: "1:162661134430:web:295eefc3d6816b69eb04cf",
  measurementId: "G-TF00N4Q4L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
    app , auth , provider
};
