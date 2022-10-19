import { Container } from "@mui/system";
import React from "react";
import ChatWrapper from "../Components/Chat/ChatWrapper";
import Navbar from "../Components/Essentials/Navbar";

const Chat = ({ curUser }) => {
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
        <ChatWrapper curUser={curUser} />
      </div>
    </Container>
  );
};

export default Chat;
