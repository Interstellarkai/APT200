import React from "react";

const CurrentUserChatBox = ({ message }) => {
  return (
    <div className="chat-box-row">
      <div className="empty-space"> </div>
      <div className="chat-box-container container-current-user">
        <div className="chat-bubble bubble-current-user">{message.text}</div>
      </div>
    </div>
  );
};

export default CurrentUserChatBox;
