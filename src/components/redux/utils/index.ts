import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert, customSelectOption } from "./interface";




//define the interface for all the states that userslice is going to be using
export interface UtilSliceState {
    isSubmitting: boolean,
    show: string | null,
    showEdit: boolean,
    alert: Alert | null,
    currentPage: number,
    itemsPerPage: number,
    deleteId: string | number | null,
    editId:string|number|null

 
}



//define the initalstate for this utilslice 
const initialState: UtilSliceState = {
    isSubmitting: false,
    show: null,
    alert: null,
    showEdit: false,
    currentPage: 1,
    itemsPerPage: 10,
    deleteId: null,
    editId:null
   
}



//create the slice
export const UtilSlice = createSlice({
    name: "utils",
    initialState,
    reducers: {

        showItem: (state: UtilSliceState, action: PayloadAction<string | null>) => {
            if (state.show === action.payload) {
                state.show = null
            } else {
                if (action.payload === null) {
                    state.showEdit = false
                }
                state.show = action.payload
            }
        },

        createAlert: (state: UtilSliceState, action: PayloadAction<Alert>) => {
            state.alert = action.payload
        },

        removeAlert: (state: UtilSliceState) => {
            if (state.alert) {
                state.alert.show = false
            }
        },

        toggleEdit: (state: UtilSliceState) => {
            state.showEdit = !state.showEdit
        },

        handlePaginationLeftDots: (state: UtilSliceState) => {
            state.currentPage = 1
        },

        handlePagination: (state: UtilSliceState, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },

        handleItemsPerPage: (state: UtilSliceState, action: PayloadAction<{ itemsPerPaged: number, dataLength: number }>) => {
            const { itemsPerPaged, dataLength } = action.payload;
            state.itemsPerPage = itemsPerPaged;

            // Adjust currentPage if it would lead to an empty page
            const lastPage = Math.ceil(dataLength / itemsPerPaged);
            state.currentPage = Math.min(state.currentPage, lastPage);
        },

        setDeleteId: (state: UtilSliceState, action: PayloadAction<string | number | null>) => {
            state.deleteId = action.payload
        },
    

        setIsSubmitting: (state: UtilSliceState, action: PayloadAction<boolean>) => {
            state.isSubmitting = action.payload
        },

        resetCurrentPage: (state: UtilSliceState) => {
            state.currentPage = 1
        },
        






    },
})





export default UtilSlice.reducer;
export const {
    showItem,
    createAlert,
    removeAlert,
    toggleEdit,
    handleItemsPerPage,
    handlePagination,
    handlePaginationLeftDots,
    setDeleteId,
    setIsSubmitting,
    resetCurrentPage,

} = UtilSlice.actions