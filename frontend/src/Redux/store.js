import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import tmpProductReducer from "./tmpProductSlice";
import chatReducer from "./chatSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    tmpProducts: tmpProductReducer,
    chat: chatReducer,
  },
});
