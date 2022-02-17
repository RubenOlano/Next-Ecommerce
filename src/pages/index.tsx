import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Homepage from "../components/Homepage/Homepage";
import { auth } from "../firebase/firebase.util";
import firebase from "firebase/compat/app";

const Home: NextPage = () => {
  const [currUser, setCurrUser] = useState<null | firebase.User>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrUser(user));
    console.log(currUser);
    return () => unsubscribe();
  }, [currUser]);
  return (
    <>
      <Header user={currUser} />
      <Homepage />
    </>
  );
};

export default Home;
