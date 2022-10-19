import { Avatar } from "@mui/material";
import React, { useEffect, useRef } from "react";

import { format } from "timeago.js";
const CurrentUserChatBox = ({ message, user = { user } }) => {
  const scroll = useRef();

  // scroll to last message
  useEffect(() => {
    scroll.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, []);
  return (
    <div className="chat-box-row" ref={scroll}>
      <div className="empty-space"> </div>
      <div className="chat-box-container container-current-user">
        <div className="chat-bubble bubble-current-user">
          <span className="">{message.text}</span>
          <span className="chat-time-ago">{format(message.createdAt)}</span>
        </div>
        <Avatar
          className="avatar"
          sx={{ margin: "0 5px", bgcolor: "rgb(18, 92, 175)" }}
        >
          {user.username.charAt(0).toUpperCase()}
        </Avatar>
      </div>
    </div>
  );
};

export default CurrentUserChatBox;
