import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import tmpProductReducer from "./tmpProductSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tmpProducts: tmpProductReducer,
  },
});
