import React from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../../styles";

const SendEmailSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center h-screen items-center gap-5">
      <div className="bg-slate-100 flex flex-col items-center w-2/6 p-6 rounded-md gap-5 max-lg:ml-4 max-lg:mr-4 max-lg:w-11/12 max-lg:h-96">
        <label className="text-lg w-full">
        Please check your email to change your password!!!
        </label>
        <div className="w-full">
          <button
            className={`bg-green-600 w-full h-11 rounded-md text-white flex justify-center items-center `}
            onClick={() => {
              navigate("/login");
            }}
          >{'Back to login'}</button>
        </div>
      </div>
    </div>
  );
};

export default SendEmailSuccess;
