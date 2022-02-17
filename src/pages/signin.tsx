import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import SignIn from "../components/SignIn/SignIn";
import { auth } from "../firebase/firebase.util";
import firebase from "firebase/compat/app";

const Signin = () => {
  const [currUser, setCurrUser] = useState<null | firebase.User>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrUser(user));
    console.log(currUser);
    return () => unsubscribe();
  }, [currUser]);
  return (
    <>
      <Header user={currUser} />
      <SignIn />
    </>
  );
};

export default Signin;
