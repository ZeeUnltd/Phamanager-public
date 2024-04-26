
import handleErrors from "../utils/errorHandler"
import { baseUrl } from "../../../baseurl"
import { toast } from "sonner"
import { useAppDispatch } from "../store"
import { setTheUser } from "."
import useAxios from '../../../api/axios'
import { createAsyncThunk } from "@reduxjs/toolkit"




const dispatch = useAppDispatch()
// export const getUser = createAsyncThunk('user/getUser', async (_, { dispatch }) => {
//     try {
//         const response = await axios.get(`/user`)
//         // toast.success(response.data.status)
//         dispatch(setTheUser(response.data))
//     } catch (err) {
//         handleErrors(err)
//         return false
//     }
// })

// export const getUser = createAsyncThunk('user/getUser', async (_, { dispatch }) => {
//     const axios = useAxios(); // Use the custom Axios instance
//     try {
//       const response = await axios.get('/user');
//       dispatch(setTheUser(response.data)); // Dispatch the Redux action with the fetched user data
//       return response.data;
//     } catch (error) {
//       throw error; // Let Redux Toolkit handle errors
//     }
//   });