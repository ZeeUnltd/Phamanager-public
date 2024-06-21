import React from 'react'
import LoadImage from '../../components/LoadImage/Image'
import bigAvatar from '../../assets/svg/bigAvatar.svg'
import {Button} from '@mui/material';
import './index.css'


const Confirmed: React.FC = () => {

  return (
    <div className='confirmed'>
        <LoadImage callback={()=>{}} alt="order confirmed"
        imagePath={bigAvatar}
         className='order-image'
        />
        <h2>Order Confirmed</h2>

        <Button sx={{
            width: '30%',
            backgroundColor: '#009fe3',
        }} variant="contained" >Back to orders</Button>
    </div>
  )
}

export default Confirmed
