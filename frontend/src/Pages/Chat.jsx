import { Container } from "@mui/system";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";
import ChatWrapper from "../Components/Chat/ChatWrapper";
import Navbar from "../Components/Essentials/Navbar";

const Chat = ({ curUser }) => {
  // Add user to socket
  const socket = useRef();
  const [onlineUsers, setOnlineUsers] = useState([]);
  // console.log("Onlineusers: ", onlineUsers);
  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", curUser._id);
    // Catch socket emitted
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [curUser]);

  return (
    <Container
      // height="100vh"
      maxWidth={false}
      disableGutters
      // border="solid black 1px"
      sx={{
        height: "100vh",
        overflow: { xs: "hidden", md: "hidden" },
      }}
    >
      <Navbar />
      <div className="chat-wrapper-container">
        <ChatWrapper
          curUser={curUser}
          socket={socket}
          onlineUsers={onlineUsers}
        />
      </div>
    </Container>
  );
};

export default Chat;
