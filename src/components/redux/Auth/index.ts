import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Auth, decodedToken, user } from "./interface";
import { login } from "./features";

interface AuthState{
    Auth:Auth|null
user:user|null
decodedToken:decodedToken|null
}
const  initialState:AuthState ={
    Auth:null,
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
    },
    setAuth:(state:AuthState, action:PayloadAction<Auth>)=>{
        state.Auth = action.payload
    }
},
extraReducers:(builder)=>{
    builder.addCase(login.pending, (state, action)=>{
        
    })
}
})

export default authSlice.reducer;
export const {setUserAccessToken, setUser, setAuth}=authSlice.actions
