import React, { useEffect, useState } from "react";
import ButtonCustom from "./ButtonCustom";
import { FaRegUserCircle, FaUserCircle, FaUserFriends } from "react-icons/fa";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import {
  RiGroupFill,
  RiGroupLine,
  RiMessengerFill,
  RiMessengerLine,
} from "react-icons/ri";
import { logo } from "../../styles";
import { LiaCheeseSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const Menu = () => {
  const path = window.location.pathname;
  const action = path.substring(path.lastIndexOf("/") + 1);
  const authLogin = useSelector((state) => state.authLogin);
  const location = useLocation();
  const [buttonIsActive, setButtonIsActive] = useState("");
  const buttonContent = [
    {
      id: 1,
      name: "Message",
      path: "/",
      button: <RiMessengerLine className="h-7 w-7 max-sm:w-0" />,
      buttonFocus: <RiMessengerFill className="h-7 w-7 max-sm:w-0" />,
    },
    {
      id: 2,
      name: "Friend",
      path: "/friend",
      button: <RiGroupLine className="h-7 w-7 max-sm:w-0" />,
      buttonFocus: <RiGroupFill className="h-7 w-7  max-sm:w-0" />,
    },
    {
      id: 3,
      name: "Profile",
      path: `/profile?id=${authLogin.userId}`,
      button: <FaRegUserCircle className="h-7 w-7 max-sm:w-0" />,
      buttonFocus: <FaUserCircle className="h-7 w-7 max-sm:w-0" />,
    },
  ];
  const getButtonIsActive = () => {
    if (location.pathname != "") {
      setButtonIsActive(location.pathname);
      if (location.search != "") {
        setButtonIsActive(location.pathname + location.search);
      }
    }
  };
  useEffect(() => {
    getButtonIsActive();
    console.log("button is active", buttonIsActive);
  });
  return (
    <div
      className="sticky top-0 max-lg:w-1/6 max-sm:w-0 sm:w-20 lg:w-1/6 border-l-black border-r-2 h-screen"
      style={action === "" ? { width: "80px" } : {}}
    >
      <div className="px-3 pt-3  ">
        {action !== "" ? (
          <img
            className="h-14 m-6 image-logo max-lg:hidden"
            src={logo.url_logo}
            alt="hygge"
          />
        ) : (
          <LiaCheeseSolid className=" max-sm:w-0 h-9 w-9 flex justify-center items-center m-auto mt-6 mb-6" />
        )}
        {action !== "" && (
          <LiaCheeseSolid className="lg:hidden max-sm:w-0 h-9 w-9 flex justify-center items-center m-auto mt-6 mb-6" />
        )}
      </div>
      <div className="">
        {buttonContent.map((value, index) => (
          <ButtonCustom value={value} key={index} action={buttonIsActive} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
