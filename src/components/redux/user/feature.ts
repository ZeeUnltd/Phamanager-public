import axios from "axios"
import handleErrors from "../utils/errorHandler"
import { baseUrl } from "../../../baseurl"
import { toast } from "sonner"
import { useAppDispatch } from "../store"
import { setTheUser } from "."



const dispatch = useAppDispatch()
export const getUser = ()=>async()=>{
    try {
        const response = await axios.get(`${baseUrl}/user`)
        // toast.success(response.data.status)
        dispatch(setTheUser(response.data))
    } catch (err) {
        handleErrors(err)
        return false
    }
}