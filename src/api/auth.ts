import { useAppDispatch, useAppSelector } from "../components/redux/store";
import Cookies from 'universal-cookie'
import jwt from 'jwt-decode'



const cookies = new Cookies()


const disaptch = useAppDispatch()
const token = useAppSelector(state=>state.auth.decodedToken)

