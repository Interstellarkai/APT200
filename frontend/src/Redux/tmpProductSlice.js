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

let messy_user_products = [
  {
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
    productName: "Unisex Uniqlo unique Shirt",
    location: null,
    price: 35,
    status: ["averageCondition"],
    category: [["men"], ["women"]],
    description: "Around 5 years old",
    username: "test",
  },
];

messy_user_products.map((p) => products.push(p));

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

    deleteProduct: (state, data) => {
      let deleteProduct = data.payload;
      state.value.products = state.value.products.filter(
        (product) =>
          deleteProduct.productName !== product.productName ||
          deleteProduct.username !== product.username
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct } = tmpProductSlice.actions;

export default tmpProductSlice.reducer;
