import React from "react";
import ChatWrapper from "../Components/Chat/ChatWrapper";
import Navbar from "../Components/Essentials/Navbar";

const Chat = ({ curUser }) => {
  return (
    <div>
      <Navbar />
      <div className="chat-wrapper-container">
        <ChatWrapper curUser={curUser} />
      </div>
    </div>
  );
};

export default Chat;
