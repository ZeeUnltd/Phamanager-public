import React, { useEffect } from 'react'
import useRefreshToken from '../hooks/useRefreshToken'
import { useAppDispatch, useAppSelector } from '../components/redux/store'
import { axiosPrivate } from './axios'
import { refreshToken } from '../components/redux/Auth/features'
import axios from 'axios'

const useAxiosPrivate = () => {

    const dispatch = useAppDispatch()
    const auth = useAppSelector(state=>state.auth.Auth)
    


    useEffect(()=>{
        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config:any) => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error:any) => Promise.reject(error)
        );

        const responseInterceptors =axiosPrivate.interceptors.response.use(
            (response:any) =>response,
            async(error:any)=>{
                const prevRequest = error.config
                if(error?.response.status ===403 && prevRequest?.sent){
                    
                prevRequest.sent = true;
                const newAccessToken = dispatch(refreshToken())
                prevRequest.headers['Authorization']= `Bearer ${newAccessToken}`
                return axiosPrivate(prevRequest)
                }
                return Promise.reject(error)
            }
            
        
        )
        return ()=>{
            axiosPrivate.interceptors.response.eject(responseInterceptors)
        }

    },[dispatch,auth])
    

  return axiosPrivate
}

export default useAxiosPrivate