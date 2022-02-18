import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import Homepage from "../components/Homepage/Homepage";
import { auth, createUserProfileDocument } from "../firebase/firebase.util";
import { onSnapshot } from "firebase/firestore";
import { connect, useDispatch } from "react-redux";
import setCurrentUser from "../redux/user/userActions";
import { AppDispatch } from "../redux/store";
import { Unsubscribe } from "firebase/auth";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const unsub = useRef<Unsubscribe>();

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

      dispatch(setCurrentUser(user));
    });
    return () => (unsub.current ? unsub.current() : undefined);
  }, [dispatch]);
  return (
    <>
      <Header />
      <Homepage />
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(Home);
