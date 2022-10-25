import React, { useEffect } from "react";
import LeftChatContainer from "./LeftChatContainer";
import RightChatContainer from "./RightChatContainer";
import { userChats } from "../../Services/ChatRequests";

import "./chat.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
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

    const showProductOwnerChat = async () => {
      console.log(location);
      if (location.state !== null) {
        try {
          let chat = location.state.chat._id;
          setReceivingUser(location.state.seller);
          // let res = await getMessages(chat._id);
          // let messages = res.data;
          // console.log("Messages: ", messages);
          // dispatch(setChat({ ...chat, messages }));
        } catch (e) {
          console.log(e);
        }
      }
    };
    getUserChats();
    // If routed from product page, show the chat of product owner
    showProductOwnerChat();
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
