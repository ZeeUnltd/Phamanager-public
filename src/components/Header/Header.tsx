import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react"
import { Box } from '@mui/material';
import Profile from '../Profile/Profile';
import classes from './Header.module.scss'


interface props {
    text?: string
    subtext?: string
    cartCount?: number
    route?: string
    h?: string
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginRight: '30px',
  ...theme.mixins.toolbar,
}));

const Header: React.FC<props> = (props) => {
  const [cartCountNumber, setCartCount] = useState(0);
  const {cartCount, h} = props
  const navigate = useNavigate()

  useEffect(()=>{
    if(cartCount)
      setCartCount(cartCount)
  },[cartCount])

  // useEffect(()=>{
  //   console.log(history)
  //   if(h){
  //     let al = history
  //     if (history.length > 2){
  //       al = history.filter((_, idx)=> (
  //         idx !== 0
  //       ))
  //       console.log(al)

  //     }
  //     const historyCopy = [...al, h]
  //     console.log(h)
  //     setHistory(historyCopy)
  //   }
  // },[h])
  return (
        <Box
          sx={{
              display: 'flex',
              justifyContent: 'space-between',
              boxSizing: 'border-box',
              marginTop: '20px',
              marginBottom: '15px',
              width: '100%'
        }}
        >
          <div className={classes.navTitle}>
               <h1>{props.text? props.text: ""}</h1>
               {
                props.subtext && <div className={classes.navTitle_text}>
                  <div className={classes.navTitle_text_arrow} onClick={()=>{
                    if(h)
                    navigate(h)
                  }}>

                  <Icon color="white" icon="majesticons:arrow-left"/>
                  </div>
                <b> <small>{props.subtext} </small></b>
                </div>
               }
          </div>
          <div className={classes.navTitle_right}>
          <DrawerHeader>
            <Link
            to="/inbounds/checkout"
            >
              <div className={classes.navTitle_cart}>
                <Icon fontSize="20px" icon='iconoir:cart'/>
                <div>{props.cartCount? props.cartCount: cartCountNumber}</div>
              </div>
            </Link>
            <Icon style={{
              marginRight: "25px"
            }} fontSize="20px" icon='carbon:notification'/>
            <Profile/>
          </DrawerHeader>
          <p className={classes.navTitle_right_id}>User ID: 1234567</p>
          </div>
        </Box>
        
  )
}

export default Header
