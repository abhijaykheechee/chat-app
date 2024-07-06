import React from "react";

const Conversation = () => {
  return (
    <div className="flex gap-2 items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounded-full ">
          <img
            src="C:\Users\abhij\chat-app\frontend\public\bg.png"
            alt="user avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Conversation;
