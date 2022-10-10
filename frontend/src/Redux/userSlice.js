import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: "test",
    email: "test@gmail.com",
    isLoggedIn: true,
    products: [
      {
        productName: "Adidas Shoes",
        location: null,
        price: 35,
        status: ["brandNew"],
        category: ["shoes"],
        description:
          "Recently bought pair of Adidas shoes from Malaysia, not used at all",
        username: "test",
      },
      {
        productName: "Unisex Uniqlo unique Shirt",
        location: null,
        price: 35,
        status: ["averageCondition"],
        category: ["men", "women"],
        description: "Around 5 years old",
        username: "test",
      },
    ],
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
    addToItems: (state, data) => {
      state.value.products.push(data.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLoggedIn, saveAddedItem, addToItems } = userSlice.actions;

export default userSlice.reducer;
