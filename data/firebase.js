import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMSPNQpxTJuJQRldKX3sJNxPBKd4T-G2I",
    authDomain: "leadership-333801.firebaseapp.com",
    projectId: "leadership-333801",
    storageBucket: "leadership-333801.appspot.com",
    messagingSenderId: "1028338127439",
    appId: "1:1028338127439:web:eacc110b5ec89f53a6503a",
    measurementId: "G-D8DMZDYZ2N"
  };

  if(!firebaseConfig.apiKey) throw new Error("Missing firebase credential: apiKey")
  if(!firebaseConfig.apiKey) throw new Error("Missing firebase credential: apiDomain")
  if(!firebaseConfig.apiKey) throw new Error("Missing firebase credential: projectId")
  if(!firebaseConfig.apiKey) throw new Error("Missing firebase credential: storageBucket")
  if(!firebaseConfig.apiKey) throw new Error("Missing firebase credential: messaging!")
  if(!firebaseConfig.apiKey) throw new Error("Missing firebase credential: appId")
  if(!firebaseConfig.apiKey) throw new Error("Missing firebase credential: measurementId")

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db, firebase };
