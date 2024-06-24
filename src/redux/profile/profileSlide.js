import { createSlice } from "@reduxjs/toolkit";


const profileSlide=createSlice({
    name:'profile',
    initialState:{
        fullname: "",
        urlAvatar: "",
        dateOfBirth:'',
        email:'',
        idAdress:'',
        describe:'',
        urlImgCover:''
    },
    reducers:{
        setProfile:(state,{payload})=>({
            fullname: payload.fullname,
            urlAvatar: payload.urlAvatar,
            dateOfBirth:payload.dateOfBirth,
            email:payload.email,
            idAdress:payload.idAdress,
            describe:payload.describe,
            urlImgCover:payload.urlImgCover
        }),
        getProfileData(){},
        updateProfile(){},
    }
})
export const {setProfile,getProfileData,updateProfile}=profileSlide.actions
export default profileSlide.reducer