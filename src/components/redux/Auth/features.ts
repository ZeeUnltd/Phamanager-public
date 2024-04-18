import { toast } from "sonner";
import { baseUrl } from "../../../baseurl";
import { Dispatch } from "redux";
// import handleErrors from "../utils/errorHandler";
import axios from "axios";
import { loginProps, patientRegistration, pharmacyRegistration } from "./interface";
import setAuthToken from "../../../lib/setAuthToken";
import { setUser, setUserAccessToken } from ".";



const OK = "success"

const handleErrors = (err: any) => {
    const response = err.response;
    switch (response?.status) {
        case 500:
            toast.error(response.data.message);
            break;

        case 400:
        case 401:
        case 404:
        case 403:
        case 409:
        case 422:
            if (response.data.errors) {
                Object.keys(response.data.errors).forEach((field) => {
                    const errors = response.data.errors[field];
                    errors.forEach((errorMessage: any) => {
                        toast.error(`${field}: ${errorMessage}`);
                    });
                });
            } else {
                toast.error(response.data.message);
            }
            break;

        default:
            toast.error(err.message);
            break;
    }
};
export const  patient_Registration= (data:patientRegistration)=>async(disaptch:Dispatch)=>{
try {
    const response = await axios.post(`${baseUrl.auth}/signup`, data)
    toast.success(response.data.message)
    disaptch(setUserAccessToken(response.data.accessToken))
    return true
} catch (error) {
    handleErrors(error)
    return false
}
}
export const  pharmacy_Registration= (data:pharmacyRegistration)=>async(disaptch:Dispatch)=>{
try {
    const response = await axios.post(`${baseUrl.auth}/pharmacy/signup`, data)
    toast.success(response.data.message)
    // disaptch(setUserAccessToken(response.data.accessToken))
    return true
} catch (error) {
    handleErrors(error)
    return false
}
}

export const login =(data:loginProps)=>async(dispatch:Dispatch)=>{
    try {
        const response = await axios.post(`${baseUrl.auth}/pharmacy/login`, data)
        toast.success(response.data.status)
       dispatch(setUser(response.data))
        return true
    } catch (error) {
        handleErrors(error)
        return false
    }
}
