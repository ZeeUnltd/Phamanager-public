import React, { useEffect, useInsertionEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../components/redux/store';
// import { getUser } from '../components/redux/user/feature';#
import RefreshToken from '../hooks/useRefreshToken';
import useRefreshToken from '../hooks/useRefreshToken';
import { getAllInvetory } from '../components/redux/inventory/features';
import { refreshToken } from '../components/redux/Auth/features';
import { fetchData } from 'next-auth/client/_utils';
import axios from 'axios';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const [refresh, setRefresh] = useState({})


  // const users = useAppSelector(state => state.user.user);
  useEffect(()=>{

    const fetchData=async()=>{
      try {
        const response = await axios.post('https://pharmanager-backend.onrender.com/auth/refresh-token')
        
        setRefresh(response.data)
        return true
      } catch (error:any) {
        console.log(error.message);
        
      }
    }
    fetchData()
  },[])
  const auth =useAppSelector(state=>state.auth.Auth)
  



  // console.log(auth);

  // console.log(auth);
  const onClick =async()=>{
    dispatch(refreshToken())
    console.log(auth);
    
  }
    


  
  

  return (
  <>
    <div>Dashboard</div>
    <button onClick={onClick}>refresh</button>

  </>
  );
};

export default Dashboard;
