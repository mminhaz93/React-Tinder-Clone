import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  return (
    <div className="chatScreen">
      <p className="chatScreenTimestamp">YOU MATCHED WITH HIM ON 23/08/2020</p>
      {messages.map((message) =>
        message?.name ? (
          <div className="chatScreenMessage">
            <Avatar src={message.image} alt={message.name} />
            <p chatScreenText>{message.text}</p>
          </div>
        ) : (
          <div className="chatScreenMessage">
            <p chatScreenTextUser>{message.text}</p>
          </div>
        )
      )}

      <div>
          <form>
              <input placeholder="Type a message" type="text"/>
              <button>SEND</button>
          </form>
      </div>
    </div>
  );
};

export default ChatScreen;
