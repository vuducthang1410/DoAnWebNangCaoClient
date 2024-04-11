import { combineReducers } from "@reduxjs/toolkit";
import authSlide from "./user/authSlide";

const reducer=combineReducers({
    authLogin:authSlide
})
export default reducer;