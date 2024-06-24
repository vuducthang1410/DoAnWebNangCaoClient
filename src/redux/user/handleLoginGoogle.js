import { call, put } from "redux-saga/effects";
import requestLoginGoogle from "./requestLoginGoole";
import { loginSuccess, setAuthLogin } from "./authSlide";

export default function* handlerLoginGoogle(action){
    try {
        console.log("handler login google");
        const response= yield call(
            requestLoginGoogle,
            action.payload
        )
        console.log("respose",response)
        yield put(
           loginSuccess({
                isLogin: response.data.message==='Login success'?true:false,
                userId: response.data.userId,
                fullname: response.data.fullName,
                urlAvatar: response.data.urlAvatar,
              })
        )
        console.log("respose",response)
    } catch (error) {
        console.log(error)
    }
}