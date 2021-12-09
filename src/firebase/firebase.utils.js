import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB7QZ5Hsqk2wZ3Z7lVG_KaMUgoB6v4dGKQ",
  authDomain: "mao-db-ceb5d.firebaseapp.com",
  projectId: "mao-db-ceb5d",
  storageBucket: "mao-db-ceb5d.appspot.com",
  messagingSenderId: "983770198832",
  appId: "1:983770198832:web:1d66e1ff65559d01e84ef5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
