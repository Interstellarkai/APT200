import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CurrentUserChatBox from "./CurrentUserChatBox";
import OtherUserChatbox from "./OtherUserChatbox";
import InputEmoji from "react-input-emoji";

const ChatBody = ({ curUser, receivingUser }) => {
  const curChat = useSelector((state) => state.chat.value);

  return (
    <div>
      {curChat._id ? (
        <div className="chat-body">
          <div className="chat-body-container">
            <div className="chat-body-wrapper">
              {curChat.messages.map((m) =>
                // If it's current user, then right, else left
                {
                  if (m.senderId === curUser._id) {
                    return (
                      <CurrentUserChatBox
                        key={m._id}
                        message={m}
                        user={curUser}
                      />
                    );
                  } else {
                    return (
                      <OtherUserChatbox
                        key={m._id}
                        message={m}
                        user={receivingUser}
                      />
                    );
                  }
                }
              )}
              {curChat.messages.map((m) =>
                // If it's current user, then right, else left
                {
                  if (m.senderId === curUser._id) {
                    return (
                      <CurrentUserChatBox
                        key={m._id}
                        message={m}
                        user={curUser}
                      />
                    );
                  } else {
                    return (
                      <OtherUserChatbox
                        key={m._id}
                        message={m}
                        user={receivingUser}
                      />
                    );
                  }
                }
              )}
              {curChat.messages.map((m) =>
                // If it's current user, then right, else left
                {
                  if (m.senderId === curUser._id) {
                    return (
                      <CurrentUserChatBox
                        key={m._id}
                        message={m}
                        user={curUser}
                      />
                    );
                  } else {
                    return (
                      <OtherUserChatbox
                        key={m._id}
                        message={m}
                        user={receivingUser}
                      />
                    );
                  }
                }
              )}
              {curChat.messages.map((m) =>
                // If it's current user, then right, else left
                {
                  if (m.senderId === curUser._id) {
                    return (
                      <CurrentUserChatBox
                        key={m._id}
                        message={m}
                        user={curUser}
                      />
                    );
                  } else {
                    return (
                      <OtherUserChatbox
                        key={m._id}
                        message={m}
                        user={receivingUser}
                      />
                    );
                  }
                }
              )}
              {curChat.messages.map((m) =>
                // If it's current user, then right, else left
                {
                  if (m.senderId === curUser._id) {
                    return (
                      <CurrentUserChatBox
                        key={m._id}
                        message={m}
                        user={curUser}
                      />
                    );
                  } else {
                    return (
                      <OtherUserChatbox
                        key={m._id}
                        message={m}
                        user={receivingUser}
                      />
                    );
                  }
                }
              )}
              {curChat.messages.map((m) =>
                // If it's current user, then right, else left
                {
                  if (m.senderId === curUser._id) {
                    return (
                      <CurrentUserChatBox
                        key={m._id}
                        message={m}
                        user={curUser}
                      />
                    );
                  } else {
                    return (
                      <OtherUserChatbox
                        key={m._id}
                        message={m}
                        user={receivingUser}
                      />
                    );
                  }
                }
              )}
              {curChat.messages.map((m) =>
                // If it's current user, then right, else left
                {
                  if (m.senderId === curUser._id) {
                    return (
                      <CurrentUserChatBox
                        key={m._id}
                        message={m}
                        user={curUser}
                      />
                    );
                  } else {
                    return (
                      <OtherUserChatbox
                        key={m._id}
                        message={m}
                        user={receivingUser}
                      />
                    );
                  }
                }
              )}
              {curChat.messages.map((m) =>
                // If it's current user, then right, else left
                {
                  if (m.senderId === curUser._id) {
                    return (
                      <CurrentUserChatBox
                        key={m._id}
                        message={m}
                        user={curUser}
                      />
                    );
                  } else {
                    return (
                      <OtherUserChatbox
                        key={m._id}
                        message={m}
                        user={receivingUser}
                      />
                    );
                  }
                }
              )}
              {curChat.messages.map((m) =>
                // If it's current user, then right, else left
                {
                  if (m.senderId === curUser._id) {
                    return (
                      <CurrentUserChatBox
                        key={m._id}
                        message={m}
                        user={curUser}
                      />
                    );
                  } else {
                    return (
                      <OtherUserChatbox
                        key={m._id}
                        message={m}
                        user={receivingUser}
                      />
                    );
                  }
                }
              )}
              {curChat.messages.map((m) =>
                // If it's current user, then right, else left
                {
                  if (m.senderId === curUser._id) {
                    return (
                      <CurrentUserChatBox
                        key={m._id}
                        message={m}
                        user={curUser}
                      />
                    );
                  } else {
                    return (
                      <OtherUserChatbox
                        key={m._id}
                        message={m}
                        user={receivingUser}
                      />
                    );
                  }
                }
              )}
            </div>
          </div>

          <div className="chat-entry">
            <InputEmoji />
          </div>
        </div>
      ) : (
        <Typography>Send a message!</Typography>
      )}
    </div>
  );
};

export default ChatBody;
