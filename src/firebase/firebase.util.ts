import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDeT1VI4Ef8cSkSxxehg8wIfzfBPX5P-IU",
  authDomain: "next-ecommerce-91d72.firebaseapp.com",
  projectId: "next-ecommerce-91d72",
  storageBucket: "next-ecommerce-91d72.appspot.com",
  messagingSenderId: "214892235261",
  appId: "1:214892235261:web:833a3975195924b1dc3194",
  measurementId: "G-ZMMKJ28VNQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithgoogle = () => auth.signInWithPopup(provider);
export default firebase;
