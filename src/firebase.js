// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5JP_1sfEOHgOuoELqIZykjdyA8PtnQjQ",
  authDomain: "clone-939a9.firebaseapp.com",
  projectId: "clone-939a9",
  storageBucket: "clone-939a9.appspot.com",
  messagingSenderId: "644431020783",
  appId: "1:644431020783:web:8eeac7bf4d10e157a8911a",
  measurementId: "G-S6B3M2SE39",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
