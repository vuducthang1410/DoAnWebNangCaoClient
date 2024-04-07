import { createSlice } from "@reduxjs/toolkit";

const authSlide=createSlice({
    name:'auth',
    initialState:{
        isLogin:false,
        userId:'',
        fullname:'',
        urlAvatar:'',
    },
    reducers:{
        authLogin:(state,{payload})=>({
            ...state,
            isLogin:payload.isLogin,
            userId:payload.userId,
            fullname:payload.fullname,
            urlAvatar:payload.urlAvatar
        })
    }
})
export const {authLogin}=authSlide.actions
export default authSlide.reducer;