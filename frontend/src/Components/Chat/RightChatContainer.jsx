import { Typography } from "@mui/material";
import React from "react";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const RightChatContainer = ({ receivingUser, curUser, socket }) => {
  return (
    <div>
      {receivingUser ? (
        <div>
          <ChatHeader
            username={receivingUser.username}
            firstname={receivingUser.firstname}
            lastname={receivingUser.lastname}
          />
          <ChatBody
            curUser={curUser}
            receivingUser={receivingUser}
            socket={socket}
          />
        </div>
      ) : (
        <div className="unselected-chat">
          <QuestionAnswerIcon sx={{ fontSize: "100px", color: "#a09e9eb3" }} />
          <Typography>Click a chat to view!</Typography>
        </div>
      )}
    </div>
  );
};

export default RightChatContainer;
