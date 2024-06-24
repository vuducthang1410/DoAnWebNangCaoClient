import React from "react";
import { Link } from "react-router-dom";

const ButtonCustom = ({ value, action,userId }) => {
  console.log("aaa",action===value.path);
  return (
    <div>
      {action === "/" ? (
        <Link
          to={value.path}
          className={`w-15 flex ${action===value.path?`bg-pink-400`:`hover:bg-slate-100`} items-center justify-center lg:px-4 py-3  mx-4 my-2 rounded-md`}
        >
          <div className="max-sm:w-0">{value.button}</div>
        </Link>
      ) : (
        <Link
          to={value.path}
          className={`max-lg:w-15 flex ${action===value.path?`bg-pink-400`:`hover:bg-slate-100`} items-center max-lg:justify-center lg:px-4 py-3  mx-4 my-2 rounded-md`}
        >
          <div className="max-sm:w-0">{value.button}</div>
          <label className="pl-4 pr-40 text-base max-lg:hidden max-lg:transition-all">
            {value.name}
          </label>
        </Link>
      )}
    </div>
  );
};

export default ButtonCustom;
