import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../../Services/UserRequests";
import UserChatCard from "./UserChatCard";

const LeftChatContainer = ({ cbFunction, curUser, chats }) => {
  const [otherUsers, setOtherUsers] = useState([]);

  // Find all other user in chats
  useEffect(() => {
    const getOtherUsers = () => {
      // from chats
      let tmpUsers = [];
      chats.map((chat) => {
        chat.members.map((member) => {
          // keep uids not of current user
          if (member !== curUser._id) {
            // console.log("Member: ", member);
            tmpUsers.push({ userId: member, chat: chat });
          }
        });
      });
      setOtherUsers(tmpUsers);
    };

    getOtherUsers();
  }, [chats]);
  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          margin: "10px 0",
          borderBottom: "1px solid #9f9f9f79",
          paddingBottom: "10px",
        }}
      >
        Chats
      </Typography>
      <div className="chats-container">
        <div className="chats-container-child">
          {otherUsers.map((user) => (
            <UserChatCard
              key={user.userId}
              userId={user.userId}
              chat={user.chat}
              cbFunction={cbFunction}
              // username={chat.username}
              // firstname={chat.firstname}
              // lastname={chat.lastname}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftChatContainer;
