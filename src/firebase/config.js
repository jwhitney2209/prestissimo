import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


// auth
// eslint-disable-next-line no-unused-vars
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }

// const provider = new GoogleAuthProvider()

// function refreshPage() {
//   window.location.reload(false);
// }

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider).then((result) => {
//     const name = result.user.displayName;
//     const email = result.user.email;
//     const profilePic = result.user.photoURL;

//     localStorage.setItem("name", name)
//     localStorage.setItem("email", email)
//     localStorage.setItem("profilePic", profilePic)
//     refreshPage();
//   }).catch((error) => {
//     console.log(error)
//   });
// }