import React from "react";

const OtherUserChatbox = ({ message }) => {
  return (
    <div className="chat-box-row">
      <div className="chat-box-container">
        <div className="chat-bubble">{message.text}</div>
      </div>
      <div className="empty-space"> </div>
    </div>
  );
};

export default OtherUserChatbox;
