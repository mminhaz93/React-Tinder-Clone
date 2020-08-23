import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  return (
    <div className="chatScreen">
      <p>YOU MATCHED WITH HIM ON 23/08/2020</p>
      {messages.map((message) => (
        <div className="chatScreenText">
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatScreen;
