import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { decodedToken, user } from "./interface";

interface AuthState{
user:user|null
decodedToken:decodedToken|null
}
const  initialState:AuthState ={
user:null,
decodedToken:null
}

export const  authSlice = createSlice({
name:"auth",
initialState,
reducers:{
    setUserAccessToken:(state:AuthState, action:PayloadAction<decodedToken>)=>{
        state.decodedToken= action.payload
    },
    setUser:(state:AuthState, action:PayloadAction<user>)=>{
        state.user = action.payload
    }
}
})

export default authSlice.reducer;
export const {setUserAccessToken, setUser}=authSlice.actions
