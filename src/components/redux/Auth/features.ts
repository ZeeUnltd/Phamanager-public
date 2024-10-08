import { toast } from "sonner";
import { Dispatch } from "redux";
import Axios from "../../../api/axios";
import { loginProps, patientRegistration, pharmacyRegistration } from "./interface";
import { setAuth, setUser, setUserAccessToken } from ".";

import { createAsyncThunk } from "@reduxjs/toolkit";
import handleErrors from "../utils/errorHandler";
import axios from "axios";



const OK = "success"

export const  patient_Registration= createAsyncThunk(
    'auth',
    async(data, {dispatch})=>{
    try {
        const response = await axios.post(`/auth/signup`, data)
        toast.success(response.data.message)
        dispatch(setUserAccessToken(response.data.accessToken))
        return true
    } catch (error) {
        handleErrors(error)
        return false
    }
    })



export const  pharmacy_Registration=createAsyncThunk(
    'auth',
    async(data, {dispatch})=>{
    try {
        const response = await axios.post(`/auth/pharmacy/signup`, data)
        toast.success(response.data.message)
        // disaptch(setUserAccessToken(response.data.accessToken))
        return true
    } catch (error) {
        handleErrors(error)
        return false
    }
    })


export const login = createAsyncThunk(
    'auth',
    async (data: loginProps, { dispatch }) => {


      try {
        const response = await Axios.post(`/auth/pharmacy/login`, data);
        toast.success(response.data.status);
        // dispatch(setUser(response.data)); // Dispatch action with response data
        const accessToken = response.data.accessToken;
        localStorage.setItem('userData', JSON.stringify(response.data))

        dispatch(setAuth(accessToken));
        return true;
      } catch (error) {
        handleErrors(error);
        return false;
      }
    }
  );
  

  export const refreshToken = createAsyncThunk(
    'auth',
    async(data, {dispatch})=>{
        try {
            const response = await axios.post('https://pharmanager-backend.onrender.com/auth/refresh-token')
            console.log(response);
            dispatch(setAuth(response.data.accessToken))
            return true
        } catch (err) {
            handleErrors(err)
            return false
        }
    }
  )