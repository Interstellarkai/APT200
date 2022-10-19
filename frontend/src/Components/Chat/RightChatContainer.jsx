import React from "react";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";

const RightChatContainer = ({ receivingUser, curUser }) => {
  return (
    <div>
      {receivingUser && (
        <div>
          <ChatHeader
            username={receivingUser.username}
            firstname={receivingUser.firstname}
            lastname={receivingUser.lastname}
          />
          <ChatBody curUser={curUser} receivingUser={receivingUser} />
        </div>
      )}
    </div>
  );
};

export default RightChatContainer;
