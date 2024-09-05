import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import utils, { UtilSlice } from './utils';
import { authSlice } from './Auth';
import { InventorySlice } from './inventory';
import { cartReducer } from './Cart/cartSlice';
import { activeReducer } from './Cart/activeSlice';
import { presCartReducer } from "./Cart/presCartSlice";
import {userCartReducer} from "./Cart/userCartSlice"

export const store = configureStore({
  reducer: {
    utils: UtilSlice.reducer,
    auth: authSlice.reducer,
    user: authSlice.reducer, // It looks like you have both 'auth' and 'user' using the same reducer, is this intentional?
    inventory: InventorySlice.reducer,
    cart: cartReducer,
    presCart: presCartReducer,
    active: activeReducer,
    userCart: userCartReducer,
  },
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;