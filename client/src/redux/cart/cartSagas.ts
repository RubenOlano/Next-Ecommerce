import { all, put, takeLatest, call } from "redux-saga/effects";
import { signOutSuccess } from "../user/userReducer";
import { clearCart } from "./cartReducer";

export function* clearCartOnSignout() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(signOutSuccess, clearCartOnSignout);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
