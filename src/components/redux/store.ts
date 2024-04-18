import {configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook,  useDispatch, useSelector } from 'react-redux'
import utils, { UtilSlice } from './utils';
import { authSlice } from './Auth';
import { InventorySlice } from './inventory';

export const store = configureStore({
    reducer:{
        utils:UtilSlice.reducer,
        auth:authSlice.reducer,
        user:authSlice.reducer,
        inventory:InventorySlice.reducer,
    }
})

export const useAppDispatch:()=> typeof store.dispatch = useDispatch;
export const useAppSelector :TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
