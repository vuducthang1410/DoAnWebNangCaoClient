import { takeLatest } from "redux-saga/effects";
import { getAuthLogin } from "./authSlide";
import handleLogin from "./handler";

export default function* authSaga(){
    yield takeLatest(getAuthLogin.type,handleLogin)
}