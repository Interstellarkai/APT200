import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: "test",
    email: "test@gmail.com",
    isLoggedIn: true,
    savedItem: {
      productName: "Test Product",
      category: [],
      price: null,
      status: [],
      description: "",
      location: null,
    },
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleLoggedIn: (state) => {
      state.value.isLoggedIn = !state.value.isLoggedIn;
    },

    saveAddedItem: (state, data) => {
      // console.log("Printing payload: ", data.payload);
      state.value.savedItem = data.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLoggedIn, saveAddedItem } = userSlice.actions;

export default userSlice.reducer;
