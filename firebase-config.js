// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
 // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBA34ObcEQ3Ay5UsZ9Q91eBu9Q7Ac4qfNk",
  authDomain: "thechadapp-3180.firebaseapp.com",
  projectId: "thechadapp-3180",
  storageBucket: "thechadapp-3180.appspot.com",
  messagingSenderId: "537914567367",
  appId: "1:537914567367:web:8c4ad54b4ac7946fe3ece2",
  measurementId: "G-ET2XDVDRW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider() 
provider.setCustomParameters({ prompt: 'select_account' });
export const dataBase = getFirestore(app)