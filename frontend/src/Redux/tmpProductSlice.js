import { createSlice } from "@reduxjs/toolkit";
import items from "../Data/items";

// Messy code - Just for prototype purposes
let products = [...items];

let messy_user_products = [
  {
    key: "0",
    productName: "Adidas Shoes",
    location: null,
    price: 35,
    status: ["brandNew"],
    category: [["shoes"]],
    description:
      "Recently bought pair of Adidas shoes from Malaysia, not used at all",

    username: "andrewng",
  },
  {
    key: "1",
    productName: "Unisex Uniqlo unique Shirt",
    location: null,
    price: 35,
    status: ["averageCondition"],
    category: [["men"], ["women"]],
    description: "Around 5 years old",
    username: "andrewng",
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
      // console.log("tmpProductSlice: ", state.value.products);
    },

    deleteProduct: (state, data) => {
      let deleteProduct = data.payload;
      state.value.products = state.value.products.filter(
        (product) => deleteProduct.key !== product.key
      );
    },
    editOneProduct: (state, data) => {
      let tmpProducts = [...state.value.products];
      let index = tmpProducts.findIndex((p) => p.key === data.payload.key);
      tmpProducts.splice(index, 1, data.payload);
      console.log("TmpProducts: ", tmpProducts);
      state.value.products = tmpProducts;
    },

    setValue: (state, data) => {
      state.value = data.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct, editOneProduct, setValue } =
  tmpProductSlice.actions;

export default tmpProductSlice.reducer;
