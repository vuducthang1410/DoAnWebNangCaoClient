import { call, put } from "redux-saga/effects";
import requestGetPeofile from "./requestGetData";
import { setProfile } from "./profileSlide";

export default function* handlerGetProfile(action){
    try {
        console.log("hehehe",action)
        const response=yield call(requestGetPeofile,action.payload);
        console.log("response get profile handler",response)
        yield put(setProfile({
            fullname: response.data.data.fullName,
            urlAvatar: response.data.data.urlAvatar,
            dateOfBirth:response.data.data.dateOfBirth,
            email:response.data.data.email,
            idAdress:response.data.data.idAdress,
            describe:response.data.data.describe,
            urlImgCover:response.data.data.urlImgCover
        }))
    } catch (error) {
        
    }
}