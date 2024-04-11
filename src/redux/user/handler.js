import { call, put } from "redux-saga/effects";
import requestLogin from "./request";
import { setAuthLogin } from "./authSlide";
import { useNavigate } from "react-router-dom";
export default function* handleLogin(action) {
  try {
    console.log(action);
    if (action.type === "auth/getAuthLogin") {
      const response = yield call(requestLogin);
      console.log("response :", response.data);
      console.log("status : ", response.data.statusCodeValue);
      console.log("response body: ", response.data.body);
      console.log("response body fullname: ", response.data.body.fullName);
      yield put(
        setAuthLogin({
          isLogin: response.data.body.message==='Login success'?true:false,
          userId: response.data.body.userId,
          fullname: response.data.body.fullName,
          urlAvatar: response.data.body.urlAvatar,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}
