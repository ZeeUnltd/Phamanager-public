import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { refreshToken } from '../Auth/features'
import { Outlet } from 'react-router-dom'

const PersistLogin = () => {
    const [isLoading, setIsLoading] =useState(true)
    const auth = useAppSelector(state=>state.auth.Auth)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        const verifyRefreshToken =async()=>{
            try {
                dispatch(refreshToken())
            } catch (error) {
                console.log(error);
                
            }finally{
                setIsLoading(false)
            }
        }
        !auth?.accessToken?verifyRefreshToken():setIsLoading(false)
    },[])
  return (
   <>
   {isLoading?<p>...loading</p>:
   <Outlet/>
    
   }</>
  )
}

export default PersistLogin