import { combineReducers } from "@reduxjs/toolkit";
import authSlide from "./user/authSlide";
import websocketSlide from "./websocket/websocketSlide";
import profileSlide from "./profile/profileSlide";

const reducer=combineReducers({
    authLogin:authSlide,
    websocketCustom:websocketSlide,
    profile:profileSlide
})
export default reducer;