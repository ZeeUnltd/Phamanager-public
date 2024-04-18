import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../components/redux/store';
import { getUser } from '../components/redux/user/feature';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.user.user);

  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);

  // const click = async()=>{
  //   await dispatch(getUser())
  // }
  // Check if users is null or undefined
  // if (!users) {
  //   return <div>Loading...</div>; // Or any other loading indicator
  // }

  // Handle the case where users is not null or undefined
  console.log(users);
  console.log(localStorage.getItem('get-token'));

  return (
  <>
    <div>Dashboard</div>
    {/* <button onClick={click}>hey</button> */}
  </>
  );
};

export default Dashboard;
