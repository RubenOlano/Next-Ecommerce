import React, { useEffect } from "react";
import { useRouter } from "next/router";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import styles from "../components/PageStyes/Signin.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { checkUserSession } from "../redux/user/userReducer";
import { RootState } from "../redux/rootReducer";

const Signin = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.currentUser);
  const router = useRouter();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  useEffect(() => {
    if (!user) return;
    router.push("/");
  }, [user, router]);

  return (
    <div className={styles["sign-in-and-sign-up"]}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Signin;
