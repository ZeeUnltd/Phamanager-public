import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
    name: "active",

    initialState: {
        active: {}
    },

    reducers: {
        toggleActive: (state, action) => {
            const id = action.payload;
            state.active[id] = !state.active[id];
        },

        resetActive: (state, action) => {
            const id = action.payload;
            delete state.active[id]; 
        }
    }
});

export const activeReducer = activeSlice.reducer;
export const {
  toggleActive,
  resetActive,
} = activeSlice.actions;