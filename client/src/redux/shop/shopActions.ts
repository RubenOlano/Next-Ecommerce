import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.util";

export const fetchCollectionsStart = createAction("shop/fetchCollections");

export const fetchCollections = createAsyncThunk(
  "shop/fetchCollections",
  async () => {
    const collectionRef = collection(firestore, "collection");
    return await getDocs(collectionRef).then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      return collectionsMap;
    });
  },
  {}
);
