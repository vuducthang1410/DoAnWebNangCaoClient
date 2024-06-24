import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import UrlRequest from "../../utils/UrlRequest";
import { logo } from "../../styles";

const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const authorizationToken = urlParams.get("authorization");
  const email = urlParams.get("email");
  const handlerChangeText = (event) => {
    setPassword(event.target.value);
  };
  const handlerChangeConfirmInput = (event) => {
    setPasswordConfirm(event.target.value);
  };
  const sendToServer = async () => {
    await axios
      .post(UrlRequest.url_reset_password, {
        email: email,
        authorization: authorizationToken,
        password: password,
      })
      .then((response) => {
        setIsSending(false);
        console.log(response);
        if (response.data.code === 200) {
          navigate("/login");
        }
        setError('Đổi mật khẩu thất bại vui lòng chọn quên mật khẩu để thực hiện gửi mail đổi mật khẩu')
        console.log("hehe",error,isClick,isValid,password.length>0,)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const validPassword = () => {
    console.log(password, password.length);
    console.log("");
    if (password === passwordConfirm) {
      if (!password.includes(" ")) {
        if (password.length < 10) {
          setError("*Password must be longer than 10 characters");
        } else {
          return true;
        }
      } else {
        setError("*Password must not contain spaces");
      }
    } else {
      setError("*Password confirmation doesn't match the password");
    }
    return false;
  };
  const handlerClickButton = () => {
    setIsClick(true);
    setIsValid(validPassword);
    if (isValid && !isSending) {
      setIsSending(true);
      sendToServer();
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <header className="text-center flex flex-col justify-center items-center">
        <img
          className="h-16 m-8 image-logo translate-y-5"
          src={logo.url_logo}
          alt="hygge"
        />
        <label className="text-2xl">Change password for account</label>
      </header>
      <div className="bg-slate-100 flex flex-col items-center h-96 w-96 p-6 rounded-md gap-5 max-lg:ml-4 max-lg:mr-4 max-lg:w-11/12 max-lg:h-96">
        <div className="w-full h-full flex flex-col items-start">
          <label>Password</label>
          <input
            className="border-none w-full h-12 rounded-md border-2 bg-white mt-2 mb-4 p-1 pl-2 text-base"
            onChange={handlerChangeText}
            name="password"
            value={password}
            type="password"
            placeholder="Enter your password"
          ></input>
          {isClick && password.length === 0 && (
            <label className="text-right text-red-600 text-sm">
              {"*Please! Enter your password"}
            </label>
          )}
          <label className="mt-4"> Confirm your new password</label>
          <input
            className="border-none w-full h-12 rounded-md mt-2 border-2 bg-white p-1 pl-2 text-base"
            onChange={handlerChangeConfirmInput}
            name="passwordConfirm"
            value={passwordConfirm}
            type="password"
            placeholder="Enter confirm password"
          ></input>
          {error.length>0 && isClick && password.length > 0 && (
            <label className="text-right text-red-600 text-sm">{error}</label>
          )}
          {isClick && password.length === 0 && (
            <label className="text-right text-red-600 text-sm">
              {"*Please! Enter your confirm password"}
            </label>
          )}
        </div>
        <div className="w-full">
          <button
            className={`bg-green-600 w-full h-11 rounded-md mt-2 text-white flex justify-center items-center ${
              isSending ? "bg-green-400" : ""
            }`}
            onClick={handlerClickButton}
          >
            {isSending === true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                width="60"
                height="60"
                style={{ shapeRendering: "auto", display: "block" }}
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <circle
                    strokeDasharray="89.5353906273091 31.845130209103033"
                    r="19"
                    strokeWidth="6"
                    stroke="#ffffff"
                    fill="none"
                    cy="50"
                    cx="50"
                  >
                    <animateTransform
                      keyTimes="0;1"
                      values="0 50 50;360 50 50"
                      dur="0.6802721088435374s"
                      repeatCount="indefinite"
                      type="rotate"
                      attributeName="transform"
                    ></animateTransform>
                  </circle>
                  <g></g>
                </g>
              </svg>
            ) : (
              "Send password reset password"
            )}
          </button>
          <label className="flex justify-end my-4">
            Continute with account?
            <a href="/login" className="ml-1 text-violet-600 font-semibold">
              Login
            </a>
          </label>
        </div>
      </div>
    </div>
  );
};
export default ChangePasswordPage;
