import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/authSlide";

const LogoutPage = () => {
  const dispatch = useDispatch();
  const handlerLogOut = () => {
    dispatch(logout());
  };
  const handlerLogOutAll = () => {
    console.log("heheh");
  };
  return (
    <div className="w-full h-full flex items-center flex-col">
      <div className="h-24 w-10/12 pt-10 ">
        <label className="h-24 w-full text-left ml-5 text-xl font-bold">
          Đăng xuất
        </label>
        <div className="ml-5 mt-5">
          <label>Đăng xuất khỏi tất cả các thiết bị!!</label>
          <div className="mt-2 ml-28">
            <button
              className="bg-red-500 hover:bg-red-600 rounded-xl text-white h-10 w-36"
              onChange={handlerLogOutAll}
            >
              Đăng xuất
            </button>
          </div>
        </div>
        <div className="ml-5 mt-10">
          <label>Đăng xuất khỏi thiết bị này!!</label>
          <div className="mt-2 ml-28">
            <button
              className="bg-red-500 hover:bg-red-600 rounded-xl text-white h-10 w-36"
              onChange={handlerLogOut}
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
