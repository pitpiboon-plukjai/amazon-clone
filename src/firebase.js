import firebase from 'firebase/compat/app'; //firebase ver 9 import
import 'firebase/compat/auth';//firebase ver 9 import
import 'firebase/compat/firestore';//firebase ver 9 import

const firebaseConfig = {
    apiKey: "AIzaSyCmRy_st05jXS6C9yF0cm0vSQ47K44Zt3A",
    authDomain: "challenge-83192.firebaseapp.com",
    projectId: "challenge-83192",
    storageBucket: "challenge-83192.appspot.com",
    messagingSenderId: "751745651414",
    appId: "1:751745651414:web:3d8f70e3789b026875af77",
    // measurementId: "G-8BHC2H1Y6F"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}; 