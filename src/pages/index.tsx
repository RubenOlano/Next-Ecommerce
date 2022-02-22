import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import Homepage from "../components/Homepage/Homepage";
import { auth, createUserProfileDocument } from "../firebase/firebase.util";
import { onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import setCurrentUser from "../redux/user/userActions";
import { Unsubscribe } from "firebase/auth";
import { RootState } from "../redux/rootReducer";
import { selectCollectionsForPreview } from "../redux/shop/shopSelector";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const unsub = useRef<Unsubscribe>();
  const collections = useSelector((state: RootState) =>
    selectCollectionsForPreview(state)
  );
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
  }, [dispatch, collections]);
  return <Homepage />;
};
export default Home;
