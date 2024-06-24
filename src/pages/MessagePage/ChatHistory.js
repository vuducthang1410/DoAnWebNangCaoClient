import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MessageItem from "./MessageItem";

const ChatHistory = () => {
  const [x, setX] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [isShow, setIsShow] = useState(null);
  const user = useSelector((state) => state.authLogin);
  useEffect(() => {
    console.log("messsage", user);
  });
  return (
    <div className="w-1/4 max-lg:w-full">
      <header className="h-28 bg-red-300">
        <label>Message</label>
      </header>
      <div className=" overflow-auto " style={{height:'40em'}}>
      {x.map((e, index) => {
          return (
            <MessageItem
              key={index}
              index={index}
              isShow={isShow}
              setIsShow={setIsShow}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ChatHistory;
