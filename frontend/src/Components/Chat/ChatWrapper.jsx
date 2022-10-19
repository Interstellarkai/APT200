import React, { useEffect } from "react";
import LeftChatContainer from "./LeftChatContainer";
import RightChatContainer from "./RightChatContainer";
import { userChats } from "../../Services/ChatRequests";

import "./chat.css";
import { useState } from "react";
const ChatWrapper = ({ curUser, socket, onlineUsers }) => {
  // Dummy data
  //   let chats = [
  //     {
  //       _id: "test0001",
  //       username: "Baby",
  //       firstname: "Abbey",
  //       lastname: "Dee",
  //     },
  //     {
  //       _id: "test0002",
  //       username: "Simon",
  //       firstname: "Simon",
  //       lastname: "Lee",
  //     },
  //     {
  //       _id: "test0003",
  //       username: "Tommmmm",
  //       firstname: "Ryan",
  //       lastname: "Tom",
  //     },
  //   ];

  const [chats, setChats] = useState([]);
  const [receivingUser, setReceivingUser] = useState(null);
  // receiving users
  useEffect(() => {
    // Find all user chats
    const getUserChats = async () => {
      try {
        let res = await userChats(curUser._id);
        let chats = res.data;
        // console.log("Chats: ", chats);
        // set all other users
        setChats(chats);
      } catch (e) {
        console.log("Error!", e);
      }
    };
    getUserChats();
    //
  }, []);
  return (
    <div className="chat-wrapper">
      {/* Left Side (chats)*/}
      <div className="left-container">
        <LeftChatContainer
          cbFunction={setReceivingUser}
          curUser={curUser}
          chats={chats}
          onlineUsers={onlineUsers}
        />
      </div>
      {/* Right Side (main) */}
      <div className="right-container hide">
        <RightChatContainer
          receivingUser={receivingUser}
          curUser={curUser}
          socket={socket}
        />
      </div>
    </div>
  );
};

export default ChatWrapper;
