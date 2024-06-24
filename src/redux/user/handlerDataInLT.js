import { put } from "redux-saga/effects";
import { loginSuccess } from "./authSlide";

export default function* handlerDataInLT(action) {
  yield put(
    loginSuccess({
      isLogin: action.payload.success,
      userId: action.payload.userId,
      fullname: action.payload.fullname,
      urlAvatar: action.payload.urlAvatar,
      accessToken:action.payload.accessToken
    })
  );
}
