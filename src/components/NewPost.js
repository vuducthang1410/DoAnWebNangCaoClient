import React from "react";
import { IoMdClose } from "react-icons/io";
import { IoImagesOutline } from "react-icons/io5";

const NewPost = () => {
  return (
    <div className="fixed bottom-0 left-0 h-svh w-dvw bg-black z-50 mt-4 bg-opacity-60 flex justify-center items-center">
      <div className="h-4/6 w-1/3 bg-white rounded-2xl">
        <header className="flex justify-center items-center border-b-2 border-slate-300 h-12">
          <label>Create new post</label>
          <button className="bg-black relative left-4">
            <IoMdClose />
          </button>
        </header>
        <div className="flex justify-center items-center flex-col">
          {/* <IoImagesOutline className="h-20 w-20 max-sm:w-0"/> 
          <label>Drag photos and videos here</label>
          <input type="file" title="Select from librarynn"></input> */}
        </div>
      </div>
    </div>
  );
};

export default NewPost;
