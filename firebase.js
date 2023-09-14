// Import the functions you need from the SDKs you need 
const { collection, getDocs } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");
const{ getFirestore } = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWeBgMJd9bVGWj8OFo5Q5U1EIKcDzkaA0",
  authDomain: "react-3cc40.firebaseapp.com",
  projectId: "react-3cc40",
  storageBucket: "react-3cc40.appspot.com",
  messagingSenderId: "16163735992",
  appId: "1:16163735992:web:d99453c07f21c829d0674d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

module.exports = {db}


const Hello = async()=> {

    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach(element => {
      console.log(element.data())
    });
      
    };