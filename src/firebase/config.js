import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// auth
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNKJ2C0fXo1r_q_UoI9We27gXnZ0Wc-Us",
  authDomain: "prestissimo-aa799.firebaseapp.com",
  projectId: "prestissimo-aa799",
  storageBucket: "prestissimo-aa799.appspot.com",
  messagingSenderId: "916862379099",
  appId: "1:916862379099:web:1dd88c3d3caeb0d87b0b7e",
  measurementId: "G-LSRHMYWPGM"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }