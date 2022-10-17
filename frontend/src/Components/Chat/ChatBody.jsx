import React from "react";
import { useSelector } from "react-redux";
import CurrentUserChatBox from "./CurrentUserChatBox";
import OtherUserChatbox from "./OtherUserChatbox";

const ChatBody = ({ curUser }) => {
  const curChat = useSelector((state) => state.chat.value);

  return (
    <div className="chat-body-container">
      {curChat["_id"] !== null ? (
        <div className="chat-body-wrapper">
          {curChat.messages.map((m) =>
            // If it's current user, then right, else left
            {
              if (m.senderId === curUser._id) {
                return <CurrentUserChatBox key={m._id} message={m} />;
              } else {
                return <OtherUserChatbox key={m._id} message={m} />;
              }
            }
          )}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default ChatBody;
