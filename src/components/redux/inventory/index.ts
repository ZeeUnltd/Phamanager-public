import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { inventory } from "./interface"

interface inventoryState{
inventory:inventory|null
}
const initialState:inventoryState={
inventory: null
}
export const InventorySlice =createSlice({
    name:"inventory",
    initialState,
   reducers:{
    setInventoryProdut:(state, action:PayloadAction<inventory>)=>{
        state.inventory = action.payload
    }

   }
})

export default InventorySlice.reducer;
export const {setInventoryProdut} = InventorySlice.actions