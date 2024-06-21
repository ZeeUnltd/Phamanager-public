import { createSlice } from "@reduxjs/toolkit";

const presCartSlice = createSlice({
  name: "presCart",
  initialState: {
    presCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.presCart.find(
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
        state.presCart.push({ ...action.payload, quantity: 1, action: true });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.presCart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.presCart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.presCart.filter(
        (item) => item.id !== action.payload
      );
      state.presCart = removeItem;
    },
  },
});

export const presCartReducer = presCartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  presCartSlice.actions;
