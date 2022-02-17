import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header/Header";
import Homepage from "../components/Homepage/Homepage";
import { auth, createUserProfileDocument } from "../firebase/firebase.util";
import { User } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

const Home: NextPage = () => {
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
    return () => unsub.current();
  }, [currUser]);
  return (
    <>
      <Header user={currUser} />
      <Homepage />
    </>
  );
};

export default Home;
