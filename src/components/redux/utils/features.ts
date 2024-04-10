import { Dispatch } from "@reduxjs/toolkit";
import {  createAlert, removeAlert } from ".";
import { batch } from "react-redux";





export const handleAlert = (data: any) => async (dispatch: Dispatch) => {
    batch(() => {
        dispatch(createAlert(data))
        setTimeout(() => { dispatch(removeAlert()) }, 3000)
    });
}


