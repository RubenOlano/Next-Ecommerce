import { PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
  UserCredential,
} from "firebase/auth";
import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from "../../firebase/firebase.util";
import { emailAndPassword, info } from "../../types/types";
import {
  checkUserSession,
  EmailSignIn,
  GoogleSignIn,
  SignInFailure,
  SignInSuccess,
  signOut,
  signOutFailure,
  signOutSuccess,
  signUp,
  signUpFailure,
  signUpSuccess,
} from "./userReducer";

export function* getSnapshotFromAuth(userAuth: User): Generator<any, any, any> {
  const userRef: DocumentReference<DocumentData> = yield call(
    createUserProfileDocument,
    userAuth,
    null
  );
  const userSnapshot: DocumentSnapshot<any> = yield call(getDoc, userRef);
  yield put(SignInSuccess(userSnapshot.data()));
}

export function* signInWithgoogle(): Generator<any, any, any> {
  try {
    const { user }: UserCredential = yield signInWithPopup(
      auth,
      googleProvider
    );
    yield getSnapshotFromAuth(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* signInWithEmail({
  payload: emailAndPassword,
}: PayloadAction<emailAndPassword>): Generator<any, any, any> {
  try {
    const { user }: UserCredential = yield signInWithEmailAndPassword(
      auth,
      emailAndPassword.email,
      emailAndPassword.password
    );
    yield getSnapshotFromAuth(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GoogleSignIn, signInWithgoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(EmailSignIn, signInWithEmail);
}

export function* isUserAuthenticated(): Generator<any, any, any> {
  try {
    const userAuth: User = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromAuth(userAuth);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(checkUserSession, isUserAuthenticated);
}

export function* signOutAuth(): Generator<any, any, any> {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}
export function* onSignOut() {
  yield takeLatest(signOut, signOutAuth);
}

export function* signUpAsync({
  payload: newUser,
}: PayloadAction<info>): Generator<any, any, any> {
  try {
    const { user } = yield createUserWithEmailAndPassword(
      auth,
      newUser.email,
      newUser.password
    );
    yield createUserProfileDocument(user, newUser.displayName);
    yield put(signUpSuccess());
    yield put(EmailSignIn({ ...newUser }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUp() {
  yield takeLatest(signUp, signUpAsync);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOut),
    call(onSignUp),
  ]);
}
