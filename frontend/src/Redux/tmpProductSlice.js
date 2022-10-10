import { createSlice } from "@reduxjs/toolkit";
import items from "../Data/items";
import users from "../Data/users";

// Messy code - Just for prototype purposes
let products = [];
let index = 0;
items.map((item) => {
  products.push({ ...item, username: users[index].username });
  index++;
});

const initialState = {
  value: {
    products: products,
  },
};

export const tmpProductSlice = createSlice({
  name: "tmpProduct",
  initialState,
  reducers: {
    addProduct: (state, data) => {
      let newProduct = data.payload;
      state.value.products.push(newProduct);
      console.log(state.value.products);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = tmpProductSlice.actions;

export default tmpProductSlice.reducer;
