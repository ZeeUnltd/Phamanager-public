import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { user, userAccessToken } from "./interface";

interface AuthState{
user:user|null
userAccessToken:userAccessToken|null
}
const  initialState:AuthState ={
user:null,
userAccessToken:null
}

export const  authSlice = createSlice({
name:"auth",
initialState,
reducers:{
    setUserAccessToken:(state:AuthState, action:PayloadAction<userAccessToken>)=>{
        state.userAccessToken = action.payload
    }
}
})

export default authSlice.reducer;
export const {setUserAccessToken}=authSlice.actions
