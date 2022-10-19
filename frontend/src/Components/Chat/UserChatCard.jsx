import {
  Avatar,
  Button,
  Card,
  CardHeader,
  IconButton,
  Tooltip,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React, { useState } from "react";
import { useEffect } from "react";
import { getUser } from "../../Services/UserRequests";

import { useDispatch } from "react-redux";
import { setChat } from "../../Redux/chatSlice";
import { getMessages } from "../../Services/MessageRequests";
import { Box } from "@mui/system";

const UserChatCard = ({ cbFunction, userId, chat, onlineUsers }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
  });

  const [isOnline, setOnline] = useState(null);

  const handleClick = async () => {
    // console.log(`Chat card ${chat._id} clicked. User ${userId}`);
    try {
      // Get mesages
      let res = await getMessages(chat._id);
      // console.log("res, ", res);
      let messages = res.data;
      // console.log("messages: ", messages);
      // Update current chatId
      cbFunction(user);
      dispatch(setChat({ ...chat, messages }));
      // For < 600px screen - Remove hide class
      console.log("See conversation");
      let right = document.getElementsByClassName("right-container");
      right[0].classList.remove("hide");
      // add hide class for left-container
      let left = document.getElementsByClassName("left-container");
      // console.log(left);
      left[0].classList.add("hide");
      // console.log(left);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      let res = await getUser(userId);
      let tmpUser = res.data;
      //   console.log("res: ", );
      setUser(tmpUser);
    };
    getUserDetails();
  }, [userId]);

  useEffect(() => {
    setOnline(onlineUsers.some((u) => u.userId === userId));
  }, [onlineUsers]);
  return (
    <Button
      sx={{
        width: "100%",
        padding: 0,
        margin: "5px 0",
        textAlign: "left",
        bgcolor: "red",
      }}
      onClick={handleClick}
    >
      <Card
        sx={{
          width: "inherit",
          "&:hover": {
            bgcolor: "#efefef",
          },
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "rgb(56, 142, 223)" }}>
              {" "}
              {user.username.charAt(0).toUpperCase()}{" "}
            </Avatar>
          }
          title={user.username}
          subheader={`${user.firstname} ${user.lastname}`}
          action={
            <Tooltip title={isOnline ? "Online" : "Offline"}>
              <Box>
                <CircleIcon
                  fontSize="10px"
                  sx={{
                    color: `${isOnline ? "#1bdd21ae" : "#c5c5c5"}`,
                  }}
                />
              </Box>
            </Tooltip>
          }
          sx={{ justifyContent: "center", alignItems: "center" }}
        />
      </Card>
    </Button>
  );
};

export default UserChatCard;
