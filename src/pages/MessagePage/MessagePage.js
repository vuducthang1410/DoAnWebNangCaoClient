import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import ChatHistory from "./ChatHistory";
import MessageConversation from "./MessageConversation";

const MessagePage = () => {
  const [user,setUser]=useState({
    userId:'fhhfhf',
    fullName:'Vu Duc Thang hehhe',
    urlAvatar:'https://lh3.googleusercontent.com/a/ACg8ocJSpkWknjL8iD8FNX-UJso2naQQIuYQCtOxn7IeUUbptUeQbFeB=s96-c',
    isOnline:false,
    timeLastOnl:'10p truoc'
  })
  return (
    <div className="flex flex-row">
      <Menu></Menu>
      <ChatHistory></ChatHistory>
      <MessageConversation user={user}></MessageConversation>
    </div>
  );
};

export default MessagePage;
