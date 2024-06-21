import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

// const dispatch = useDispatch()

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
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
        state.cart.push({ ...action.payload, quantity: 1, active: true });
      }
    },
    activeState: (state, action) => {
      const modeInCart = state.active.valueOf(
        (item) => item.id === action.payload.id
      );
      modeInCart = !modeInCart;
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  activeState,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;
