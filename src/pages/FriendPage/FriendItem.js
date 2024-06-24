import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import "./FriendItem.scss";

const FriendItem = ({ index, isShow, setIsShow }) => {
  const handleMoreClick = () => {
    setIsShow(isShow === index ? null : index);
  };
  return (
    <div
      className="h-36  bg-slate-100 flex items-center px-5 py-5 m-1 rounded-xl relative"
      style={{ width: "400px" }}
    >
      <img
        className="rounded-md"
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
            className="bg-slate-300  h-24 w-52 absolute left-5 z-50 custom-radius
          flex flex-col justify-center p-2
          "
          >
            <button className="w-full h-10 rounded-xl hover:bg-purple-200">
              Nhắn tin
            </button>
            <button className="w-full h-10 rounded-xl hover:bg-purple-200">
              Hủy kết bạn
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendItem;
