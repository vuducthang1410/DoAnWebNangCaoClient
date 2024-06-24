import React from "react";
import HeaderStory from "./HeaderStory";
import Post from "../../components/Post";

const MainContent = () => {
  const post = {
    amountLike: 10,
    amountComment: 10,
    idAuthor: "1",
    isLike: true,
    nameAuthor: "Vu Duc Thang",
    timeCreatePost: "14p trước",
    urlAvatarAuthor:
      "https://trangtrinhacua.com.vn/wp-content/uploads/2023/12/20.png",
  };
  return (
    <div className="w-screen flex items-center flex-col">
      <HeaderStory />
      this is a main content
      <Post value={post}></Post>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
};

export default MainContent;
