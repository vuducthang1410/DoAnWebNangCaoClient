import React from "react";

const MessegerProfile = ({ user }) => {
  return (
    <div
      className="h-80 flex flex-col justify-center items-center px-10 py-5 rounded-xl relative"
      style={{ width: "350px" }}
    >
      <img className="rounded-full h-24 w-24 border-x border-y " src={user.urlAvatar}></img>
      <div className="flex flex-col justify-center m-3 items-center ">
        <div className="w-full text-lg font-medium">{user.fullName}</div>
        {user.isOnline === false ? (
          <div className="w-full text-sm text-center text-zinc-600">Đang hoạt động</div>
        ) : (
          <div>
            <label className="w-full text-sm text-zinc-600">
              {user.timeLastOnl}
            </label>
          </div>
        )}
      </div>
      <button className="h-10 bg-gray-200 rounded-lg w-44">
        Xem trang cá nhân
      </button>
    </div>
  );
};

export default MessegerProfile;
