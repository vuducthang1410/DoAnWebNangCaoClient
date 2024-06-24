import { takeLatest } from "redux-saga/effects";
import {loginGoogle, loginRequest, loginSuccess, loginWithDataInLocal, logout, refreshToken } from "./authSlide";
import handleLogin from "./handler";
import handlerLoginGoogle from "./handleLoginGoogle";
import requestLogin from "./request";
import handlerDataInLT from "./handlerDataInLT";
import handlerRefreshToken from "./handlerRefreshToken";
import handlerLogout from "./handlerLogout";

export default function* authSaga(){
    yield takeLatest(loginRequest.type,handleLogin);
    yield takeLatest(loginWithDataInLocal.type,handlerDataInLT)
    yield takeLatest(refreshToken.type,handlerRefreshToken)
    yield takeLatest(logout.type,handlerLogout)
    // yield takeLatest(loginGoogle.type,handlerLoginGoogle)
}