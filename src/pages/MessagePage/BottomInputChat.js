import React, { useEffect, useReducer, useRef, useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import AutoResizingTextarea from "./CustomTextArea";
const BottomInputChat = () => {
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef();
  const [imageURL, setImageURL] = useState(null);
  const handleOnChange = (event) => {
    console.log("handle onchange");
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const onChooseFile = () => {
    console.log("on choose file");
    inputRef.current.click();
    console.log(selectedFile);
  };
  useEffect(() => {
    if (selectedFile != null) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);
  return (
    <div className="flex h-full rounded-3xl">
      <div className="w-full rounded-3xl flex flex-col items-center justify-center">
      {imageURL && <img src={imageURL} alt="Selected" style={{ width: '300px', height: 'auto' }} />}
        <AutoResizingTextarea />
      </div>
      <div className="  flex justify-center gap-1 items-center mr-3">
        {content.length === 0 ? (
          <>
            <button className="w-12 h-12 hover:bg-slate-100 flex justify-center items-center rounded-full ">
              <HiOutlinePhotograph size={30} onClick={onChooseFile} />
              <input
                type="file"
                ref={inputRef}
                style={{ display: "none" }}
                onChange={handleOnChange}
              ></input>
            </button>

            <button className="w-12 h-12 hover:bg-slate-100 flex justify-center items-center rounded-full ">
              <CiHeart size={30} />
            </button>
          </>
        ) : (
          <button className="w-14 h-12 flex mx-2 p-1 justify-center items-center">
            <label className="text-pink-600 font-medium text-lg">{"Gửi"}</label>
          </button>
        )}
      </div>
    </div>
  );
};

export default BottomInputChat;
