import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header/Header";
import SignIn from "../components/SignIn/SignIn";
import { auth, createUserProfileDocument } from "../firebase/firebase.util";
import { User } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import SignUp from "../components/SignUp/SignUp";
import styles from "../components/PageStyes/Signin.module.scss";

const Signin = () => {
  const [currUser, setCurrUser] = useState<any | User>(null);

  const unsub = useRef<any>(null);

  useEffect(() => {
    unsub.current = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = await createUserProfileDocument(user);
        if (!docRef) return;
        onSnapshot(docRef, (snapshot) => {
          setCurrUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
    });
    console.log(currUser);
    return () => {
      unsub.current();
      console.log(currUser);
    };
  }, [currUser]);
  return (
    <>
      <Header user={currUser} />
      <div className={styles["sign-in-and-sign-up"]}>
        <SignIn />
        <SignUp />;
      </div>
    </>
  );
};

export default Signin;
