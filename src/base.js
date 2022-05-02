
import firebase from 'firebase/compat/app'; //v9
import 'firebase/firestore'
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcCObDB0cyRZ6syWEaddPpsYsVG78rTx8",
    authDomain: "hfc-ecom.firebaseapp.com",
    projectId: "hfc-ecom",
    storageBucket: "hfc-ecom.appspot.com",
    messagingSenderId: "739172756475",
    appId: "1:739172756475:web:761d7b3a64ab4cc107b95e",
    measurementId: "G-XMP6ZWQB5F"
  };

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export default firebase

