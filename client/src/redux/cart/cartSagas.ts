import { User } from "firebase/auth";
import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import {
  all,
  put,
  takeLatest,
  call,
  select,
  takeEvery,
} from "redux-saga/effects";
import {
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.util";
import { ICartItems } from "../../types/types";
import { SignInSuccess, signOutSuccess } from "../user/userReducer";
import {
  addItem,
  clearCart,
  clearItems,
  getInitCart,
  removeItem,
} from "./cartReducer";
import { getCartItems, getPrice, getQuantity } from "./cartSelector";

export function* clearCartOnSignout() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(signOutSuccess, clearCartOnSignout);
}

export function* getCartFromFirebase(): Generator<any, any, any> {
  const user: User = yield getCurrentUser();
  if (!user) return;
  const userRef: DocumentReference<DocumentData> = yield call(
    createUserProfileDocument,
    user,
    null
  );
  const userSnap: DocumentSnapshot<any> = yield call(getDoc, userRef);
  const initCart = userSnap.data();
  yield put(
    getInitCart({
      cartItems: initCart.cart,
      hidden: true,
      totalCount: initCart.totalCount,
      totalPrice: initCart.totalPrice,
    })
  );
}

export function* onSignInSuccess() {
  yield takeLatest(SignInSuccess, getCartFromFirebase);
}

export function* updateFirebase(): Generator<any, any, any> {
  const user: User = yield getCurrentUser();
  if (!user) return;
  const userRef: DocumentReference<DocumentData> = yield call(
    createUserProfileDocument,
    user,
    null
  );

  const items: ICartItems[] = yield select(getCartItems);
  const price: number = yield select(getPrice);
  const quantity: number = yield select(getQuantity);

  yield updateDoc(userRef, {
    cart: items,
    totalCound: quantity,
    totalPrice: price,
  });
}

export function* onAddCart() {
  yield takeEvery(addItem, updateFirebase);
}

export function* onRemoveCart() {
  yield takeEvery(removeItem, updateFirebase);
}

export function* onClearItems() {
  yield takeEvery(clearItems, updateFirebase);
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onAddCart),
    call(onRemoveCart),
    call(onClearItems),
    call(onSignInSuccess),
  ]);
}
