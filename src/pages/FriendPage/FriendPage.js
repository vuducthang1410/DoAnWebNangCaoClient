import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import FriendItem from "./FriendItem";
const FriendPage = () => {
  const [x, setX] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [isShow, setIsShow] = useState(null);
  return (
    <div>
      <div className="flex flex-row h-screen">
        <Menu></Menu>
        <div className="flex gap-5">
          <div className=" h-full w-1/4 p-3 border-x flex flex-col gap-2">
            <button className="h-10 w-full hover:bg-slate-200 rounded-lg text-left pl-8">
              Danh sách bạn bè
            </button>
            <button className="h-10 w-full hover:bg-slate-200 rounded-lg text-left pl-8">
              Lời mời kết bạn đã nhận
            </button>
            <button className="h-10 w-full hover:bg-slate-200 rounded-lg text-left pl-8">
              Lời mời kết bạn đã gửi
            </button>
            <button className="h-10 w-full hover:bg-slate-200 rounded-lg text-left pl-8">
              Gợi ý kết bạn
            </button>
            <button className="h-10 w-full hover:bg-slate-200 rounded-lg text-left pl-8">
              Tìm kiếm người dùng
            </button>
          </div>
          <div className="w-full  flex flex-wrap h-full overflow-auto ">
            {x.map((e, index) => {
              return (
                <FriendItem
                  key={index}
                  index={index}
                  isShow={isShow}
                  setIsShow={setIsShow}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendPage;
