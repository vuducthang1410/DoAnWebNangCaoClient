import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "../../redux/profile/profileSlide";
import CustomTextArea from "../../components/CustomTextArea";
import Utils from "../../utils/Utils";
const ProfileSetting = () => {
  const authLogin = useSelector((state) => state.authLogin);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const choiseAvatarRef = useRef();
  const [isValid, setIsValid] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileData, setProfileData] = useState({
    fullname: "",
    urlAvatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJSpkWknjL8iD8FNX-UJso2naQQIuYQCtOxn7IeUUbptUeQbFeB=s96-c",
    dateOfBirth: "",
    email: "",
    idAdress: "",
    describe: "",
    urlImgCover: "",
  });
  const [maxLength, setMaxLength] = useState({
    fullname: profileData.fullname.length,
    describe: profileData.describe.length,
  });
  const handlerChangeFullName = (event) => {
    if (event.target.value.length <= 150)
      setProfileData({ ...profileData, fullname: event.target.value });
  };
  const handlerChangeDescriber = (event) => {
    if (event.target.value.length <= 250)
      setProfileData({ ...profileData, describe: event.target.value });
  };
  const handlerChangeEmail = (event) => {
    setProfileData({ ...profileData, email: event.target.value });
    setIsValid(Utils.regexValidEmail(profileData.email));
  };
  const handlerChangeDateOfBirth = (event) => {
    setProfileData({ ...profileData, dateOfBirth: event.target.value });
  };
  const handleOnChange = (event) => {
    console.log("handle onchange");
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const onChooseFile = () => {
    console.log("on choose file");
    choiseAvatarRef.current.click();
    console.log(selectedFile);
  };
  useEffect(() => {
    dispatch(getProfileData(authLogin.userId));
  }, [dispatch, authLogin.userId]);

  useEffect(() => {
    if (profile) {
      setProfileData(profile);
    }
  }, [profile]);
  useEffect(() => {
    setMaxLength({
      describe: profileData.describe.length,
      fullname: profileData.fullname.length,
    });
  }, [profileData]);
  useEffect(() => {
    if (selectedFile != null) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({ ...profileData, urlAvatar: reader.result });
      };
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);
  return (
    <div className="w-full h-full flex items-center flex-col">
      <div className="h-24 w-10/12 pt-10 ">
        <label className="h-24 w-full text-left ml-5 text-xl font-bold">
          Chỉnh sửa trang cá nhân
        </label>
      </div>
      <div className="h-full w-10/12 bg-slate-200 rounded-2xl mt-5">
        <div className="flex my-2 mx-8 items-center gap-96">
          <img
            className="h-32 w-32 border-x-2 border-y-2 rounded-full object-cover"
            src={profileData.urlAvatar}
          ></img>
          <button
            className="h-12 w-52 bg-blue-500 rounded-xl mr-5 text-white font-semibold hover:bg-blue-600 "
            onClick={onChooseFile}
          >
            Thay đổi ảnh đại diện
            <input
              type="file"
              ref={choiseAvatarRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleOnChange}
            ></input>
          </button>
        </div>
      </div>
      <div className="h-full w-10/12 ">
        <div className="flex flex-col m-5">
          <label className="font-semibold text-lg ">Tên tài khoản</label>
          <div className="flex flex-col relative my-2 rounded-2xl border-x border-y">
            <input
              onChange={handlerChangeFullName}
              value={profileData.fullname}
              className=" outline-none p-1 rounded-2xl px-4 h-12 w-11/12 "
            ></input>
            <label className="absolute bottom-1 right-5 text-slate-500 text-sm">
              {maxLength.fullname}/100
            </label>
          </div>
        </div>
        <div className="flex flex-col m-5">
          <label className="font-semibold text-lg ">Tiểu sử</label>
          <div className="flex flex-col relative my-2 px-2 py-3 rounded-2xl border-x border-y">
            <CustomTextArea
              placeholder={"Mô tả thêm bản thân"}
              value={profileData.describe}
              className={"resize-none outline-none rounded-xl px-4  w-11/12"}
              onChange={handlerChangeDescriber}
            ></CustomTextArea>
            <label className="absolute bottom-1 right-5 text-slate-500 text-sm">
              {maxLength.describe}/250
            </label>
          </div>
        </div>
        <div className="flex flex-col m-5">
          <label className="font-semibold text-lg ">Email</label>
          <div className="flex flex-col relative my-2 rounded-2xl border-x border-y">
            <input
              onChange={handlerChangeEmail}
              value={profileData.email}
              className=" outline-none p-1 rounded-2xl px-4 h-12 w-11/12 "
            ></input>
          </div>
        </div>
        <div className="flex flex-col m-5">
          <label className="font-semibold text-lg ">Ngày sinh</label>
          <div className="flex flex-col relative my-2 rounded-2xl border-x border-y">
            <input
              onChange={handlerChangeDateOfBirth}
              value={profileData.dateOfBirth}
              type="date"
              className=" outline-none p-1 rounded-2xl px-4 h-12 w-11/12 "
            ></input>
            <label className="absolute bottom-1 right-5 text-slate-500 text-sm">
              {maxLength.fullname}/100
            </label>
          </div>
        </div>
        <div className="flex flex-col m-5">
          <label className="font-semibold text-lg ">Quê quán</label>
          <div className="flex flex-col relative my-2 rounded-2xl border-x border-y">
            <select
              className="rounded-2xl outline-none h-12 mx-2"
              value={"haha"}
            >
              <option>hehe</option>
              <option>haha</option>
            </select>
          </div>
        </div>
        <div className="flex w-full justify-end mb-10">
          {" "}
          <button
            className="h-12 w-40 hover:bg-blue-600 bg-blue-500 rounded-xl mr-5 text-white font-semibold "
            onClick={() => {
              console.log(profileData);
            }}
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
