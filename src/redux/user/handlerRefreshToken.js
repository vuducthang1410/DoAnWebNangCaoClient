import axios from "axios";
import { call, put } from "redux-saga/effects";
import requestRefreshToken from "./requestRefreshToken";
import { setAccessToken } from "./authSlide";

export default function* handlerRefreshToken(action) {
    console.log("action",action)
  try {
    yield put(setAccessToken({
        accessToken:action.accessToken
    }))
  } catch (error) {
    console.log("error refresh token", error)
  }
}