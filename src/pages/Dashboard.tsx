import React, { useEffect, useInsertionEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../components/redux/store';
// import { getUser } from '../components/redux/user/feature';#
import RefreshToken from '../hooks/useRefreshToken';
import useRefreshToken from '../hooks/useRefreshToken';
import { getAllInvetory } from '../components/redux/inventory/features';
import { refreshToken } from '../components/redux/Auth/features';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const refresh = useRefreshToken()
  const inventory = useAppSelector(state=>state.inventory.inventory)

  useEffect(()=>{
    dispatch(getAllInvetory())
  },[dispatch])
  // const users = useAppSelector(state => state.user.user);
  const auth =useAppSelector(state=>state.auth.Auth)
  



  // console.log(auth);

  // console.log(auth);
  const onClick =async()=>{
    dispatch(refreshToken())
    console.log(auth);
    
  }
  
  console.log(inventory);
  
  
  

  return (
  <>
    <div>Dashboard</div>
    <button onClick={onClick}>refresh</button>

  </>
  );
};

export default Dashboard;
