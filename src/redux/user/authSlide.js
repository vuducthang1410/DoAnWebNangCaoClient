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
        setAuthLogin:(state,{payload})=>({
            ...state,
            isLogin:payload.isLogin,
            userId:payload.userId,
            fullname:payload.fullname,
            urlAvatar:payload.urlAvatar
        }),
        getAuthLogin(){}
    }
})
export const {setAuthLogin,getAuthLogin}=authSlide.actions
export default authSlide.reducer;