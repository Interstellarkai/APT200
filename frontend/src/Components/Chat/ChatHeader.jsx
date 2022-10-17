import { Avatar, CardHeader } from "@mui/material";
import React from "react";

const ChatHeader = ({ username, firstname, lastname }) => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "rgb(56, 142, 223)" }}>
            {" "}
            {username.charAt(0).toUpperCase()}{" "}
          </Avatar>
        }
        title={username}
        subheader={`${firstname} ${lastname}`}
      />
    </div>
  );
};

export default ChatHeader;
