import React from "react";
import { MdMoreHoriz } from "react-icons/md";

const MessageItem = ({ index, isShow, setIsShow }) => {
  const handleMoreClick = () => {
    setIsShow(isShow === index ? null : index); // Toggle giá trị isShow
  };
  return (
    <div
      className="h-20  hover:bg-slate-100 flex items-center px-10 py-5 m-1 rounded-xl relative"
      style={{ width: "350px" }}
    >
      <img
        className="rounded-full h-16 w-16"
        src="https://lh3.googleusercontent.com/a/ACg8ocJSpkWknjL8iD8FNX-UJso2naQQIuYQCtOxn7IeUUbptUeQbFeB=s96-c"
      ></img>
      <div className="flex flex-col justify-center m-3  ">
        <button className="w-full text-xl font-semibold">
          {"vu duc thang"}
        </button>
        <button className="w-full text-left text-base">{"100"} ban be</button>
      </div>
      <div className="absolute right-8">
        <button
          onClick={handleMoreClick}
          className=" h-9 w-9 hover:bg-slate-300 flex justify-center items-center rounded-full"
        >
          <MdMoreHoriz />
        </button>
        {isShow === index && (
          <div
            className="bg-slate-300  h-32 w-80 absolute left-5 z-50 custom-radius
          flex flex-col justify-center p-2
          "
          >
            <button className="w-full h-14 rounded-xl hover:bg-purple-200">
              Nhắn tin
            </button>
            <button className="w-full h-14 rounded-xl hover:bg-purple-200">
              Hủy kết bạn
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageItem;
