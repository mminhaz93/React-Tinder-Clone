import React from 'react';
import "./Chat.css"
import {Avatar} from "@material-ui/coreAvatar"

const Chat = ({name,message,timestamp,profilePic}) => {
    return (
        <div  className="chat">
            <Avatar src={profilePic} alt={name}/>
        </div>
    );
};

export default Chat;