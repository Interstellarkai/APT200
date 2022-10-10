import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: "test",
    email: "test@gmail.com",
    isLoggedIn: true,
    products: [
      {
        key: "0",
        productName: "Adidas Shoes",
        location: null,
        price: 35,
        status: ["brandNew"],
        category: [["shoes"]],
        description:
          "Recently bought pair of Adidas shoes from Malaysia, not used at all",
        username: "test",
      },
      {
        key: "1",
        productName: "Unisex Uniqlo unique Shirt",
        location: null,
        price: 35,
        status: ["averageCondition"],
        category: [["men"], ["women"]],
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
      let size = state.value.products.length;
      state.value.products.push({ ...data.payload, key: { size } });
    },

    setValue: (state, data) => {
      console.log(data.payload);
      state.value = data.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLoggedIn, saveAddedItem, addToItems, setValue } =
  userSlice.actions;

export default userSlice.reducer;
