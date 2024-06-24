import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {
  loginWithDataInLocal,
} from "../redux/user/authSlide";
import useWebSocket from "react-use-websocket";
import UrlRequest from "./UrlRequest";

const PrivateRouter = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const dispatch = useDispatch();
  const authDataLocal = JSON.parse(localStorage.getItem("authLogin"));
  const authData=useSelector(state=>state.authLogin)
  const { initializeWebSocket } = useWebSocket();
  const accessToken = localStorage.getItem("accessToken");
  // console.log(code);
  // console.log("router", authData);
  // console.log("json router", localStorage.getItem("authLogin"));
  // console.log("auth data local",authDataLocal)
  // con
  useEffect(() => {
    if(authData.isLogin===false&&authDataLocal!=null&&authDataLocal!==undefined){
      dispatch(loginWithDataInLocal(authDataLocal));
      // initializeWebSocket(UrlRequest.url_websocket, accessToken);
    }
    if (code !== undefined && code != null && code.length > 0) {
      // dispatch(loginGoogle({code:code}))
    }
  });

  return !authData.isLogin ? <Navigate to={"/login"} /> : <Outlet />;
};

export default PrivateRouter;
