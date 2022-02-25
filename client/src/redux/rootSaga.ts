import { call, all } from "redux-saga/effects";
import { cartSagas } from "./cart/cartSagas";
import { fetchCollectionsStart } from "./shop/shopSaga";
import { userSagas } from "./user/userSaga";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]);
}
