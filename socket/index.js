/* Here is the explanation for the code above:
1. In the first line we are importing socket.io module, and creating a new instance of socket.io by passing the port number as the first argument and an object as the second argument.
2. We are creating an array of active users, this array will be updated whenever a new user connects and whenever a user disconnects.
3. We are listening for the connection event, and whenever a new user connects to our websocket server, we are adding a new event listener for the new-user-add event, and whenever we receive this event, we are adding the new user to our active users array.
4. We are emitting an event get-users to all the connected users, and sending the active users array as the data.
5. We are listening for the disconnect event, and whenever a user disconnects, we are removing the user from the active users array, and emitting an event get-users to all the connected users, and sending the active users array as the data.
6. We are listening for the send-message event, and whenever we receive this event, we are finding the user in the active users array, and emitting an event receive-message to the user, and sending the data as the data. */

const io = require("socket.io")(8800, {
    cors: {
        origin: "http://localhost:3000",
    },
});

let activeUsers = [];

// 1. "new-user-add" event is fired when a new user is connected to the server. The event listener adds the new user to the activeUsers array and emits the "get-users" event to all users. The "get-users" event returns the activeUsers array to all users.
io.on("connection", (socket) => {
    // add new User
    socket.on("new-user-add", (newUserId) => {
        // if user is not added previously
        if (!activeUsers.some((user) => user.userId === newUserId)) {
            activeUsers.push({userId: newUserId, socketId: socket.id});
            console.log("New User Connected", activeUsers);
        }
        // send all active users to new user
        io.emit("get-users", activeUsers);
    });
    // 2. "disconnect" event is fired when a user disconnect from the server. The event listener removes the user from the activeUsers array and emits the "get-users" event to all users. The "get-users" event returns the activeUsers array to all users.
    socket.on("disconnect", () => {
        // remove user from active users
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
        console.log("User Disconnected", activeUsers);
        // send all active users to all users
        io.emit("get-users", activeUsers);
    });

    // 3. "send-message" event is fired when a user sends a message to another user. The event listener finds the receiver user in the activeUsers array and emits the "receive-message" event to the receiver user. The "receive-message" event returns the message to the receiver user. */
    // send message to a specific user
    socket.on("send-message", (data) => {
        const {receiverId} = data;
        const user = activeUsers.find((user) => user.userId === receiverId);
        console.log("Sending from socket to :", receiverId);
        console.log("Data: ", data);
        if (user) {
            io.to(user.socketId).emit("receive-message", data);
        }
    });
});
