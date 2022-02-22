import { initializeApp, FirebaseOptions } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  User,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  collection,
  writeBatch,
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";
import { ISHOP_DATA } from "../types/types";

const config: FirebaseOptions = {
  apiKey: "AIzaSyDeT1VI4Ef8cSkSxxehg8wIfzfBPX5P-IU",
  authDomain: "next-ecommerce-91d72.firebaseapp.com",
  projectId: "next-ecommerce-91d72",
  storageBucket: "next-ecommerce-91d72.appspot.com",
  messagingSenderId: "214892235261",
  appId: "1:214892235261:web:833a3975195924b1dc3194",
  measurementId: "G-ZMMKJ28VNQ",
};
export const firebase = initializeApp(config);
export const auth = getAuth();
export const firestore = getFirestore(firebase);

export const createUserProfileDocument = async (userAuth: User | null) => {
  if (!userAuth) return;
  const docRef = doc(firestore, "/users", userAuth.uid);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = Date();

    try {
      await setDoc(docRef, {
        email,
        displayName,
        createdAt,
      });
    } catch (error) {
      console.log(`Error creating user ${userAuth}`);
    }
  }

  return docRef;
};

export const addCollectionAndItems = async (
  collectionKey: string,
  objectsToAdd: QuerySnapshot<DocumentData>
) => {
  const collectionRef = collection(firestore, collectionKey);
  const batch = writeBatch(firestore);
  objectsToAdd.forEach((obj) => {
    const newRef = doc(collectionRef);
    batch.set(newRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (
  collections: QuerySnapshot<DocumentData>
) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase() as string] = collection;
    return accumulator;
  }, {} as ISHOP_DATA);
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithgoogle = async () =>
  await signInWithPopup(auth, provider);
export default firebase;
