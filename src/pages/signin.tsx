import React, { useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import SignIn from "../components/SignIn/SignIn";
import { auth, createUserProfileDocument } from "../firebase/firebase.util";
import { onSnapshot } from "firebase/firestore";
import SignUp from "../components/SignUp/SignUp";
import styles from "../components/PageStyes/Signin.module.scss";
import { useDispatch } from "react-redux";
import setCurrentUser from "../redux/user/userActions";
import { Unsubscribe } from "firebase/auth";

const Signin = () => {
  const dispatch = useDispatch();
  const unsub = useRef<Unsubscribe | any>(null);

  useEffect(() => {
    unsub.current = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = await createUserProfileDocument(user);
        if (!docRef) return;
        onSnapshot(docRef, (snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      }
    });
    return () => {
      unsub.current();
    };
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className={styles["sign-in-and-sign-up"]}>
        <SignIn />
        <SignUp />;
      </div>
    </>
  );
};

export default Signin;
