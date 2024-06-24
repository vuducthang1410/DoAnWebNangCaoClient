import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import { FaPen } from "react-icons/fa";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineMail, MdOutlinePlace } from "react-icons/md";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";
import { url } from "../../utils";
import axiosInstance from "../../services/Interceptor/Interceptor";
import { useSelector } from "react-redux";
import store from "../../redux/configureStore";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState("");
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const userId = searchParam.get("id");
  const navigate=useNavigate()
  const getProfileData = async () => {
    await axiosInstance
      .get(url.url_get_profile + `?id=${userId}`)
      .then((response) => {
        setProfileData(response.data.data);
      })
      .catch((error) => {
        console.log("loi roi ne", error);
      });
  };
  useEffect(() => {
    getProfileData();
    console.log(profileData);
  }, []);
  return (
    <div className="flex">
      <Menu></Menu>
      <div className=" h-screen w-full flex relative flex-col items-center">
        <div className="w-full flex justify-center items-center">
          {profileData.urlImgCover === "" ||
          profileData.urlImgCover === null ||
          profileData.urlImgCover === undefined ? (
            <img
              className="rounded-md w-11/12 h-80 object-cover"
              src={profileData.urlAvatar}
            ></img>
          ) : (
            <img
              className="rounded-md w-11/12 h-80 object-cover"
              src={profileData.urlImgCover}
            ></img>
          )}
          <div
            className="rounded-full h-48 w-48 absolute left-28
        top-64 border-x-4 border-y-4 border-white
        flex justify-center items-center"
          >
            <button className="relative w-full h-full rounded-full overflow-hidden group">
              <img
                className="rounded-full h-full w-full object-cover"
                src={profileData.urlAvatar}
                alt="Profile"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-slate-50 opacity-50 transition rounded-full"></div>
            </button>
          </div>
        </div>
        <div className=" h-96 w-11/12 flex flex-col pl-72 pt-5 relative border-b-2">
          <label className="text-3xl font-bold">{profileData.fullName}</label>
          <label className="text-base font-medium text-slate-700">
            {profileData.amountFriend} <label>Bạn bè</label>
          </label>
          <label>
            {profileData.isOnline === true
              ? "Đang hoạt động"
              : "Hoat động 10p trước"}
          </label>
          <button
            className="h-10 w-60 bg-slate-200 rounded-lg 
          absolute top-8 right-20 flex justify-center items-center gap-2
          font-medium hover:bg-slate-300"
          onClick={()=>{
            navigate('/profile-setting')
          }}
          >
            <FaPen size={18} />
            Chỉnh sửa trang cá nhân
          </button>
        </div>
        <div className="h-full w-full bg-slate-100 gap-2 py-1 px-14 flex justify-center items-center">
          <div className="h-full w-1/2 bg-white flex flex-col pt-8 px-6 items-center rounded-xl">
            <div className="w-full">
              <label className="font-semibold text-lg text-left">
                {" "}
                Giới thiệu
              </label>
            </div>
            <label className="my-3">{profileData.describer}</label>
            {profileData.describer === "" ||
            profileData.describer === null ||
            profileData.describer === undefined ? (
              <button className="h-10 w-60 bg-slate-200 rounded-lg  font-medium hover:bg-slate-300">
                Thêm tiểu sử
              </button>
            ) : (
              <button className="h-10 w-60 bg-slate-200 rounded-lg  font-medium hover:bg-slate-300">
                Chỉnh sửa tiểu sử
              </button>
            )}
          </div>
          <div className="h-full w-1/2 bg-white flex flex-col pt-8 px-6 rounded-xl">
            {profileData.dateOfBirth === "" ||
            profileData.dateOfBirth === null ||
            profileData.dateOfBirth === undefined ? (
              <></>
            ) : (
              <label className="flex items-center gap-2 m-2">
                <LiaBirthdayCakeSolid size={20} />
                Ngày sinh:
                <label className="font-medium">{profileData.dateOfBirth}</label>
              </label>
            )}

            {profileData.idAddress === "" ||
            profileData.idAddress === null ||
            profileData.idAddress === undefined ? (
              <></>
            ) : (
              <label className="flex items-center gap-2 m-2">
                <MdOutlinePlace />
                Đến từ:
                <label className="font-medium">{profileData.idAddress}</label>
              </label>
            )}

            {profileData.email === "" ||
            profileData.email === null ||
            profileData.email === undefined ? (
              <></>
            ) : (
              <label className="flex items-center gap-2 m-2">
                <MdOutlineMail />
                Email:
                <label className="font-medium">{profileData.email}</label>
              </label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
