import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    _id: null,
    members: null,
    messages: null,
  },
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat: (state, data) => {
      // console.log(data.payload);
      state.value = data.payload;
    },
    addToMessages: (state, data) => {
      state.value.messages.push(data.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChat, addToMessages } = chatSlice.actions;

export default chatSlice.reducer;
