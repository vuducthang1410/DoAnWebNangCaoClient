import { takeLatest } from "redux-saga/effects";
import { getProfileData } from "./profileSlide";
import handlerGetProfile from "./handlerGetProfile";

export default function* profileSaga(){
    yield takeLatest(getProfileData.type,handlerGetProfile)
}