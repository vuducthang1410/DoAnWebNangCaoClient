import React, { useState } from "react";
import { logo } from "../../styles";
import Utils from "../../utils/Utils";
import axios from "axios";
import UrlRequest from "../../utils/UrlRequest";
import { useNavigate } from "react-router-dom";

const PasswordResetPage = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const handlerChangeText = (event) => {
    setEmail(event.target.value);
    setIsValid(Utils.regexValidEmail(email));
  };
  const sendToServer=async()=>{
    await axios.post(UrlRequest.url_forget_password,email).then(response=>{
        setIsSending(false)
        navigate('/send-mail-success');
    }
    ).catch(error=>{

    })
  }
  const handlerClickButton = () => {
    setIsClick(true);
    setIsValid(Utils.regexValidEmail(email));
    if (isValid && !isSending) {
      setIsSending(true);
      console.log(email)
      sendToServer()
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
        <label className="text-2xl">Reset your password</label>
      </header>
      <div className="bg-slate-100 flex flex-col items-center h-80 w-2/6 p-6 rounded-md gap-5 max-lg:ml-4 max-lg:mr-4 max-lg:w-11/12 max-lg:h-96">
        <label className="text-lg w-full">
          Enter your user account's verified email address and we will send you
          a password reset link.
        </label>
        <div className="w-full h-full">
          <input
            className="border-none w-full h-12 rounded-md border-2 bg-white mt-4 p-1 pl-2 text-base"
            onChange={handlerChangeText}
            name="email"
            value={email}
            placeholder="Enter your account email"
          ></input>
          {isValid === false && isClick && email.length > 0 && (
            <label className="text-right text-red-600 text-sm">
              {"*Email is not in the correct format"}
            </label>
          )}
          {isClick && email.length === 0 && (
            <label className="text-right text-red-600 text-sm">
              {"*Please! Enter your account email"}
            </label>
          )}
        </div>
        <div className="w-full">
          <button
            className={`bg-green-600 w-full h-11 rounded-md text-white flex justify-center items-center ${isSending?'bg-green-400':''}`}
            onClick={handlerClickButton}
          >
            {isSending === true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                width="60"
                height="60"
                //   style={{shape-rendering: auto; display: block; background: rgb(210, 211, 212);}}
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
              "Send password reset email"
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

export default PasswordResetPage;
