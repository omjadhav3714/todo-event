import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "KEY",
  authDomain: "auth domain",
  projectId: "Project ID",
  storageBucket: "Storage bucket",
  messagingSenderId: "sender Id",
  appId: "App Id"
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();