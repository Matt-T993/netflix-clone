// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2t2ewUgHrlfsrmE-ZDcS4icZT8GHtuhg",
  authDomain: "netflix-clone-a50fc.firebaseapp.com",
  projectId: "netflix-clone-a50fc",
  storageBucket: "netflix-clone-a50fc.appspot.com",
  messagingSenderId: "754616850146",
  appId: "1:754616850146:web:d38256a39a7c97161af0bb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }