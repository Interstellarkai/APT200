import { CircularProgress, Fab, IconButton, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrentUserChatBox from "./CurrentUserChatBox";
import OtherUserChatbox from "./OtherUserChatbox";
import InputEmoji from "react-input-emoji";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { addMessage, getMessages } from "../../Services/MessageRequests";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { setChat } from "../../Redux/chatSlice";

const ChatBody = ({ curUser, receivingUser }) => {
  const curChat = useSelector((state) => state.chat.value);
  const dispatch = useDispatch();
  // console.log(curChat);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (msg) => {
    console.log(msg);
    setNewMessage(msg);
  };

  const handleClick = async () => {
    console.log("sending message: ", newMessage);
    setSending(true);
    let chatId = curChat._id;
    let text = newMessage;
    let senderId = curUser._id;
    try {
      let res = await addMessage({ chatId, senderId, text });
      console.log(res);
      setSending(false);
      setNewMessage("");
      fetchNewMessages();
    } catch (e) {
      console.log(e);
      setSending(false);
    }
  };

  const fetchNewMessages = async () => {
    try {
      // Get mesages
      let res = await getMessages(curChat._id);
      let messages = res.data;
      dispatch(setChat({ ...curChat, messages }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setNewMessage("");
  }, [receivingUser]);
  return (
    <div>
      <div className="chat-body">
        {curChat._id ? (
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
              {/* {curChat.messages.map((m) =>
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
              )} */}
            </div>
          </div>
        ) : (
          <div className="chat-body-container">
            <Typography>Oh... No messages yet! Say something!</Typography>{" "}
          </div>
        )}
        <div className="chat-entry">
          <InputEmoji onChange={handleChange} value={newMessage} />
          <Box sx={{ m: 1, position: "relative" }}>
            <Fab
              onClick={handleClick}
              disabled={sending || newMessage === ""}
              sx={{ bgcolor: "#ffffff" }}
              size="small"
            >
              <SendIcon sx={{ boxShadow: "none" }} />
            </Fab>
            {sending && (
              <CircularProgress
                size={50}
                sx={{
                  // color: green[500],
                  position: "absolute",
                  top: -6,
                  left: -6,
                  zIndex: 1,
                }}
              />
            )}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
