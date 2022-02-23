import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.util";

export const fetchCollections = createAsyncThunk(
  "shop/fetchCollections",
  async () => {
    const collectionRef = collection(firestore, "collection");
    return await getDocs(collectionRef).then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);

      return collectionsMap;
    });
  },
  {}
);
