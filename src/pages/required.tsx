import React from 'react'
import { useAppSelector } from '../components/redux/store'

const RequireAuth = () => {
    const  Auth = useAppSelector(state=>state.auth.Auth)

    
  return (
    <div>RequireAuth</div>
  )
}

export default RequireAuth