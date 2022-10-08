import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: "test",
    email: "test@gmail.com",
    isLoggedIn: true,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleLoggedIn: (state) => {
      state.value.isLoggedIn = !state.value.isLoggedIn;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLoggedIn } = userSlice.actions;

export default userSlice.reducer;
