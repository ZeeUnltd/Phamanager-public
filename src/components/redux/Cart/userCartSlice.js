import { createSlice } from "@reduxjs/toolkit";

const userCartSlice = createSlice({
  name: "userCart",
  initialState: {
    userCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.userCart.find(
        (item) => item.id === action.payload.id
      );
      

      if (itemInCart) {
        if (itemInCart.quantity === 0) {
          itemInCart.quantity++;
          itemInCart.active = true;
          console.log(itemInCart.active)
        } else {
          itemInCart.quantity = 0;
          itemInCart.active = false;
          console.log(itemInCart.active)
        }
      } else {
        state.userCart.push({ ...action.payload, quantity: 1, active: true });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.userCart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.userCart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.userCart.filter(
        (item) => item.id !== action.payload
      );
      state.userCart = removeItem;
    },
  },
});

export const userCartReducer = userCartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  userCartSlice.actions;
