import { Avatar } from "@mui/material";
import React from "react";
import { format } from "timeago.js";

const OtherUserChatbox = ({ message, user }) => {
  return (
    <div className="chat-box-row">
      <div className="chat-box-container">
        <Avatar sx={{ margin: "0 5px" }}>
          {user.username.charAt(0).toUpperCase()}
        </Avatar>
        <div className="chat-bubble">
          <span className="">{message.text}</span>
          <span className="chat-time-ago">{format(message.createdAt)}</span>
        </div>
      </div>
      <div className="empty-space"> </div>
    </div>
  );
};

export default OtherUserChatbox;
