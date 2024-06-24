import React, { useContext, useEffect } from "react";
import { Navigate, useOutletContext } from "react-router-dom";

import Tabbar from "../../components/Tabbar";
import MainContent from "./MainContent";
import Menu from "../../components/Menu/Menu";
import NewPost from "../../components/NewPost";
import WebSocketContext, { useWebSocket } from "../../services/WebSocketContext";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { websocket } = useWebSocket(); 
  const { initializeWebSocket } = useWebSocket();
  const authLogin = useSelector((state) => state.authLogin);
  useEffect(()=>{
    const data=localStorage.getItem("authLogin")
    console.log("home page",authLogin)
    console.log("local home page",data)
    // console.log(data)
    // websocket.sendComment("hehhehe");
    // console.log("1",websocket)
    // console.log("2",initializeWebSocket)
  },[])
  return (
      <div className="flex flex-row">
        <Menu></Menu>
        <MainContent />
        <Tabbar></Tabbar>
        {/* <NewPost/> */}
      </div>
  );
};

export default HomePage;
