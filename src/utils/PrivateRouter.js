import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { setAuthLogin } from "../redux/user/authSlide";

const PrivateRouter = () => {
  const authLogin = useSelector((state) => state.authLogin);
  const dispatch=useDispatch()
  const location=useLocation()
  if(authLogin.isLogin===false){
    console.log("local storage",localStorage.getItem("authLogin"))
  }
  console.log("private",authLogin)
  return (
      !authLogin.isLogin?<Navigate to={'/login'}/>:<Outlet/>
  );
};

export default PrivateRouter;
