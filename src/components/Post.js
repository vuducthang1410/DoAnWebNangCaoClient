import React, { useRef, useState } from "react";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import MyEditor from "./MyInput";
import NewPost from "./NewPost";

const Post = ({ value }) => {
  console.log(value);
  const [comment,setComment]=useState("")
  return (
    <div className="px-5">
      <header className="flex items-center ">
        <img
          src={value.urlAvatarAuthor}
          alt="avatar"
          className="rounded-full h-9 w-9"
        />
        <div className="flex flex-col mx-3">
          <label className="font-semibold text-sm">{value.nameAuthor}</label>
          <label className="text-xs text-slate-600">
            {value.timeCreatePost}
          </label>
        </div>
        <button>
          <IoIosMore className="ml-60 h-6 w-6" />
        </button>
      </header>
      <nav className="mt-3 mb-2">
        <label>hehehehe</label>
      </nav>
      <footer className="border-b-2 border-t-2">
        <div className="flex my-2">
          <button>
            <FaRegHeart className="h-6 w-6" />
            <FaHeart className="h-6 w-6 text-red-600 hidden" />
          </button>
          <button className="mx-5">
            <FaRegComment className="h-6 w-6" />
          </button>
          <button>
            <LuSend className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col">
          {value.amountLike > 0 ? "" : ""}
          <label className="font-semibold text-sm">{value.amountLike} like</label>
          <button className=" mr-auto">
            <label className="text-sm text-slate-600 cursor-pointer">
              Views all {value.amountComment} comment
            </label>
          </button>
          <div className="flex w-6">
            <MyEditor comment={comment} setComment={setComment}></MyEditor>
            <button className="m-1 ml-5 text-red-400" onClick={()=>
              console.log(comment)
            }>
                Post
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Post;
