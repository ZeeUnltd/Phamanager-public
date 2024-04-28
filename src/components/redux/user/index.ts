import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { user } from "./interface";

interface userState {
user:user|null
}
const initialState:userState ={
user:null
}

export const authSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setTheUser:(state:userState, action:PayloadAction<user>)=>{
            state.user = action.payload
        }
    }
})


export default authSlice.reducer;
export const {setTheUser} = authSlice.actions