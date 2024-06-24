import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { LiaInfoCircleSolid } from "react-icons/lia";
import MessegerProfile from "./MessegerProfile";
import BottomInputChat from "./BottomInputChat";
const MessageConversation = ({ user }) => {
  return (
    <div className="w-full  flex flex-col items-center">
      <header className=" w-full h-20 flex border-b border-neutral-300">
        <button
          className="h-20  flex items-center px-10 py-5 m-1 rounded-xl relative"
          style={{ width: "350px" }}
        >
          <img className="rounded-full h-12 w-12 " src={user.urlAvatar}></img>
          <div className="flex flex-col justify-center m-3  ">
            <div className="w-full text-base font-medium">
              {user.fullName}
            </div>
            {user.isOnline === false ? (
              <div className="w-full text-left text-xs text-zinc-600">
                Đang hoạt động
              </div>
            ) : (
              <div>
                <labe className="w-full text-left text-sm text-zinc-600">
                  {user.timeLastOnl}
                </labe>
              </div>
            )}
          </div>
        </button>
        <div className="absolute right-10 top-5 flex items-center justify-center">
          <button className=" h-12 w-12 hover:bg-slate-300 flex justify-center items-center rounded-full">
            <IoVideocamOutline size={27} />
          </button>
          <button className=" h-12 w-12 hover:bg-slate-300 flex justify-center items-center rounded-full">
            <LiaInfoCircleSolid size={27} />
          </button>
        </div>
      </header>
      <div className="h-full w-full flex justify-center  ">
        <MessegerProfile user={user}></MessegerProfile>
      </div>
      <footer className="h-16 w-11/12 m-4  border-x border-y border-gray-400 rounded-3xl">
        <BottomInputChat></BottomInputChat>
      </footer>
    </div>
  );
};

export default MessageConversation;
