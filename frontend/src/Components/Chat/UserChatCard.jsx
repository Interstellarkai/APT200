import { Avatar, Button, Card, CardHeader } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { getUser } from "../../Services/UserRequests";

import { useDispatch } from "react-redux";
import { setChat } from "../../Redux/chatSlice";
import { getMessages } from "../../Services/MessageRequests";

const UserChatCard = ({ cbFunction, userId, chat }) => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    // console.log(`Chat card ${chat._id} clicked. User ${userId}`);
    // Get mesages
    let res = await getMessages(chat._id);
    // console.log("res, ", res);
    let messages = res.data;
    // console.log("messages: ", messages);
    // Update current chatId
    cbFunction(user);
    dispatch(setChat({ ...chat, messages }));
  };
  const [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
  });

  useEffect(() => {
    const getUserDetails = async () => {
      let res = await getUser(userId);
      let tmpUser = res.data;
      //   console.log("res: ", );
      setUser(tmpUser);
    };
    getUserDetails();
  }, [userId]);
  return (
    <Button
      sx={{
        width: "100%",
        padding: 0,
        margin: "5px 0",
        textAlign: "left",
      }}
      onClick={handleClick}
    >
      <Card sx={{ width: "inherit" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "rgb(56, 142, 223)" }}>
              {" "}
              {user.username.charAt(0).toUpperCase()}{" "}
            </Avatar>
          }
          title={user.username}
          subheader={`${user.firstname} ${user.lastname}`}
        />
      </Card>
    </Button>
  );
};

export default UserChatCard;
