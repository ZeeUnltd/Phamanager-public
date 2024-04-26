
import Axios from '../../../api/axios'
import { baseUrl } from "../../../baseurl"
import { useAppDispatch } from "../store"
import { setInventoryProdut } from "."
import handleErrors from "../utils/errorHandler"

import { createAsyncThunk } from '@reduxjs/toolkit'


export const getAllInvetory =createAsyncThunk(
    'inventory',
    async (data, { dispatch }) => {

    try {
        const response = await Axios.get(`/manager/inventory`)
         dispatch(setInventoryProdut(response.data))
         return true
    } catch (err) {
        handleErrors(err)
        return false
    }
})