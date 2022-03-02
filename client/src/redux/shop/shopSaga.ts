import {
  collection,
  DocumentData,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.util";
import { ISHOP_DATA } from "../../types/types";
import { fetchfailure, fetchSuccess } from "./shopReducer";

function* fetchCollectionsAsync(): Generator<
  unknown,
  QuerySnapshot<DocumentData> | ISHOP_DATA | void,
  never
> {
  try {
    const collectionRef = collection(firestore, "collection");
    const snapshot: QuerySnapshot<DocumentData> = yield getDocs(collectionRef);
    const collectionsMap: ISHOP_DATA = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchSuccess(collectionsMap));
  } catch (error) {
    put(fetchfailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest("shop/fetchCollections", fetchCollectionsAsync);
}
