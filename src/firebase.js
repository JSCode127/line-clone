import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDaBlEw9MIuG7SvSceZ7wE55hHwTYYrSDc",
  authDomain: "line-clone-bb139.firebaseapp.com",
  projectId: "line-clone-bb139",
  storageBucket: "line-clone-bb139.appspot.com",
  messagingSenderId: "642939270250",
  appId: "1:642939270250:web:22ee70dbacc731c4ed8613"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};