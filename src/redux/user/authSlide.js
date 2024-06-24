import { createSlice } from "@reduxjs/toolkit";

const authSlide = createSlice(
  {
    name: "auth",
    initialState: {
      isLogin: false,
      userId: "",
      fullname: "",
      urlAvatar: "",
      error: [],
      loading: false,
      accessToken: "",
    },
    reducers: {
      loginRequest: (state, { payload }) => ({
        ...state,
        loading: true,
        accessToken: "",
        error: [],
      }),
      loginSuccess: (state, { payload }) => ({
        isLogin: true,
        userId: payload.userId,
        fullname: payload.fullname,
        urlAvatar: payload.urlAvatar,
        error: [],
        loading: false,
        accessToken: payload.accessToken,
      }),
      loginFailure: (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload.error,
        accessToken: "",
      }),
      getAuthLogin: (state) => {
        return state;
      },
      logout: (state) => ({
        ...state,
        isLogin: false,
        userId: "",
        fullname: "",
        urlAvatar: "",
        error: [],
        loading: false,
        accessToken: "",
      }),
      setAccessToken: (state, { payload }) => ({
        ...state,
        accessToken: payload.accessToken,
      }),
      refreshToken() {},
      loginGoogle() {},
      loginWithDataInLocal() {},
    },
  },
  {}
);
export const {
  loginWithDataInLocal,
  loginFailure,
  loginRequest,
  loginSuccess,
  logout,
  loginGoogle,
  refreshToken,
  setAccessToken
} = authSlide.actions;
export default authSlide.reducer;
