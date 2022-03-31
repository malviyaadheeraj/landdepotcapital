import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgP5OmarOr4r29hXzF2X93bMsDpRyM98o",
  authDomain: "landepotcapital.firebaseapp.com",
  projectId: "landepotcapital",
  storageBucket: "landepotcapital.appspot.com",
  messagingSenderId: "59212570616",
  appId: "1:59212570616:web:6c2aa279f9d3b6e8e9800d",
  measurementId: "G-BWSF75DKNF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider, googleProvider };
