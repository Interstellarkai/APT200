import { createSlice } from "@reduxjs/toolkit";

const defaultUser = {
  value: {
    username: "APT20000",
    email: "APT20000@gmail.com",
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

const initialState = {
  value: {
    username: null,
    email: null,
    isLoggedIn: false,
    products: null,
    savedItem: null,
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
      state.value.products.push({
        ...data.payload,
        key: data.payload.productName,
      });
    },

    editOneItem: (state, data) => {
      let curItems = [...state.value.products];
      let values = data.payload;
      let index = curItems.findIndex((d) => values.key === d.key);
      curItems.splice(index, 1, values);
      state.value.products = curItems;
    },

    setValue: (state, data) => {
      console.log(data.payload);
      state.value = data.payload;
    },
    setDefaultUser: (state, data) => {
      // console.log(data.payload.username);
      state.value = { ...defaultUser.value, username: data.payload.username };
    },

    setUser: (state, data) => {
      let { username, firstname, lastname, _id } = data.payload;
      state.value = { username, firstname, lastname, _id, isLoggedIn: true };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleLoggedIn,
  saveAddedItem,
  addToItems,
  setValue,
  editOneItem,
  setDefaultUser,
  setUser,
} = userSlice.actions;

export default userSlice.reducer;
