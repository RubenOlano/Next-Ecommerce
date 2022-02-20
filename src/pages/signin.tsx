import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import SignIn from "../components/SignIn/SignIn";
import { auth, createUserProfileDocument } from "../firebase/firebase.util";
import { onSnapshot } from "firebase/firestore";
import SignUp from "../components/SignUp/SignUp";
import styles from "../components/PageStyes/Signin.module.scss";
import { useDispatch, useSelector } from "react-redux";
import setCurrentUser from "../redux/user/userActions";
import { Unsubscribe } from "firebase/auth";
import { RootState } from "../redux/rootReducer";

const Signin = () => {
  const dispatch = useDispatch();
  const unsub = useRef<Unsubscribe | any>(null);
  const user = useSelector((state: RootState) => state.user.currentUser);
  const router = useRouter();

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

  useEffect(() => {
    if (!user) return;
    router.replace("/signint", "/");
  }, [user, router]);

  return (
    <div className={styles["sign-in-and-sign-up"]}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Signin;
