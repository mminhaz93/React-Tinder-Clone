import React from "react";
import "./Chat.css";
import { Avatar } from "@material-ui/core";

const Chat = ({ name, message, timestamp, profilePic }) => {
  return (
    <div className="chat">
      <Avatar className="chatImage" src={profilePic} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p>{timestamp}</p>
    </div>
  );
};

export default Chat;
