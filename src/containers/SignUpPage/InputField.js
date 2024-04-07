import React from "react";

const InputField = ({ user, input, handleChangeInput }) => {
  return (
    <div key={input.id} className="relative h-10 mt-1">
      <input
        className="px-1 py-0 input-signup outline-none border-b w-72 border-b-slate-700 bg-white"
        id={input.id}
        name={input.name}
        value={user[input.name]}
        type={input.type}
        onChange={handleChangeInput}
      />
      <label
        className={`absolute left-0 pointer-events-none text-slate-600 ${
          user[input.name] === ""
            ? ""
            : "-translate-y-4 text-xs transition ease-linear duration-75"
        }`}
      >
        {input.placeholder}
      </label>
    </div>
  );
};

export default InputField;
