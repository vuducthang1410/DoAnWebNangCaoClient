import React from "react";

const LoginPage = () => {
  const inputFields = [
    {
      id: "username",
      name: "username",
      label: "Tên đăng nhập",
      type: "text",
      placeholder: "Username",
    },
    {
        id: "password",
        name: "password",
        label: "Mật khẩu",
        type: "password",
        placeholder: "Password",
      },
  ];
  return (
    <div className="flex justify-center items-center bg-red-200 h-screen">
        <div className="bg-slate-700 h-4/6 w-7/12 rounded-2xl grid-cols-2 grid max-sm:grid-cols-1 max-sm:w-80 ">
            <nav className="bg-yellow-400 max-sm:hidden">

            </nav>
            <div className="bg-sky-300">

            </div>
        </div>
    </div>
  );
};

export default LoginPage;
