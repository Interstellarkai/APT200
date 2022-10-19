import { Typography } from "@mui/material";
import React from "react";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";

const RightChatContainer = ({ receivingUser, curUser }) => {
  return (
    <div>
      {receivingUser ? (
        <div>
          <ChatHeader
            username={receivingUser.username}
            firstname={receivingUser.firstname}
            lastname={receivingUser.lastname}
          />
          <ChatBody curUser={curUser} receivingUser={receivingUser} />
        </div>
      ) : (
        <div className="unselected-chat">
          <Typography bgcolor={"red"}>Click a chat to view!</Typography>
        </div>
      )}
    </div>
  );
};

export default RightChatContainer;
