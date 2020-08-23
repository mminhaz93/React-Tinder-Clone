import React from "react";
import "./Chats.css";
import Chat from "../chat/Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Hey"
        timestamp="1 min ago"
        profilepic="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <Chat
        name="Harry"
        message="good"
        timestamp="5 min ago"
        profilepic="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
    </div>
  );
};

export default Chats;
