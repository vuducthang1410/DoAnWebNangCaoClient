import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  let authLogin = useSelector((state) => state.auth);
  console.log("auth", authLogin);
  return (
      authLogin.isLogin ? <Navigate to={"/login"} /> :<Outlet/>
  );
};

export default PrivateRouter;
