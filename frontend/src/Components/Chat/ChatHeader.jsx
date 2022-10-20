import {
  Avatar,
  Box,
  Button,
  CardHeader,
  IconButton,
  Tooltip,
} from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import React from "react";

const ChatHeader = ({ username, firstname, lastname }) => {
  const handleClick = () => {
    console.log("Go to chat");
    // Remove right display
    let right = document.getElementsByClassName("right-container");
    right[0].classList.add("hide");
    // Show left display
    let left = document.getElementsByClassName("left-container");
    // console.log(left);
    left[0].classList.remove("hide");
    // console.log(left);
  };

  return (
    <div className="chat-header-container">
      <div className="show-chat">
        <Box>
          <Tooltip title={"See chats"}>
            <IconButton onClick={handleClick}>
              <ArrowBackIosRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </div>
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
