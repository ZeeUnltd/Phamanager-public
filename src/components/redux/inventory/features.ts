import axios from "axios"
import { baseUrl } from "../../../baseurl"

export const getAllInvetory =()=> async()=>{
    try {
        const response = await axios.get(`${baseUrl.inventory}/product`)
        
    } catch (err) {
        
    }
}