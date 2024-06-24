import React from "react";
import Menu from "../../components/Menu/Menu";
import ProfileSetting from "./ProfileSetting";
import LogoutPage from "./LogoutPage";

const SettingProfilePage = () => {
  return (
    <div className="flex flex-row h-screen">
      <Menu></Menu>
      <div className="flex gap-5 w-full">
        <div className=" h-full w-1/4 p-3 border-x flex flex-col gap-2">
          <div className="flex ml-5 items-center h-20">
            <label className="font-bold text-xl">Cài đặt</label>
          </div>
          <button className="h-10 w-full hover:bg-slate-200 rounded-lg text-left pl-8">
            Chỉnh sửa trang cá nhân
          </button>
          <button className="h-10 w-full hover:bg-slate-200 rounded-lg text-left pl-8">
            Đổi mật khẩu
          </button>
          <button className="h-10 w-full hover:bg-slate-200 rounded-lg text-left pl-8">
            Ngôn ngữ
          </button>
          <button className="h-10 w-full hover:bg-slate-200 rounded-lg text-left pl-8">
            Chế độ tối
          </button>
          <button className="h-10 w-full hover:bg-slate-200 rounded-lg text-left pl-8">
            Chính sách người dùng
          </button>
          <button className="h-10 w-full hover:bg-slate-200 rounded-lg text-left pl-8">
            Đăng xuất
          </button>
        </div>
        <div className="w-full h-full overflow-auto ">
          {/* <ProfileSetting></ProfileSetting> */}
          <LogoutPage></LogoutPage>
        </div>
      </div>
    </div>
  );
};

export default SettingProfilePage;
