import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderStory = () => {
  const [storyList, setStoryList] = useState([
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:true,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:true,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:true,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:true,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:true,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:false,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:false,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:true,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:false,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:true,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:true,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:true,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:true,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:true,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:true,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    },
    {
      idStory: 1,
      idAuthor: 1,
      nameAuthor:"Vũ Đức Thắng",
      isRead:true,
      imgStory:
        "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
    }
  ]);
  return (
    <div className="flex my-6 w-96  items-center overflow-auto no-scrollbar">
      {storyList.map((item, index) => (
        <div
          key={index}
          className={`flex justify-center items-center m-2 p-1 ${item.isRead===true?"border-red-600":"border-slate-600"}`}
          style={{
            borderRadius: "9999px",
            borderWidth: "2px",
            // borderColor: "red",  
          }}
        >
          <Link className="pointer-events-auto w-14">
            <img className="h-14 w-14 rounded-full " src={item.imgStory} alt={item.nameAuthor}/>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeaderStory;
