import { call, put } from "redux-saga/effects";
import requestLogin from "./request";
import {
  loginFailure,
  loginSuccess,
} from "./authSlide";
export default function* handleLogin(action) {
  try {
    console.log("hehe", action);
    if (action.type === "auth/loginRequest") {
      const response = yield call(requestLogin, action.payload);
      console.log("response", response);
      console.log(response.data.data.urlAvatar)
      if (response.data.code === 200) {
        console.log(response.data.data.urlAvatar)
        yield put(
          loginSuccess({
            isLogin:response.data.success,
            userId: response.data.data.userId,
            fullname: response.data.data.fullName,
            urlAvatar: response.data.data.urlAvatar,
            accessToken:response.data.data.accessToken
          })
        );
        localStorage.setItem("accessToken",response.data.data.accessToken)
      } else {
        console.log("error",response.data.error)
        yield put(
          loginFailure({
              error:response.data.error
          })
        );
      }
    }
  } catch (error) {
    console.log("loi");
  }
}
