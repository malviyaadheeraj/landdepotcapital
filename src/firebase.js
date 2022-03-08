import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6x42sg9wo7TkoXG4G5t_mBWGYMfklXvc",
  authDomain: "landdepot-a42bf.firebaseapp.com",
  projectId: "landdepot-a42bf",
  storageBucket: "landdepot-a42bf.appspot.com",
  messagingSenderId: "320599688210",
  appId: "1:320599688210:web:1a57a9ef523f560cfc84cb",
  measurementId: "G-8KMEG014NE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider, googleProvider };
