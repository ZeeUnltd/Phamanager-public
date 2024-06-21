import React from 'react'
import LoadImage from '../../../components/LoadImage/Image'
import bigAvatar from '/svg/bigAvatar.svg'
import {Button} from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../index.css'


function QuotedSuccessful () {
  const param = useParams();
  const uniqueID = param.id;

  return (
    <div className='confirmed'>
        <LoadImage callback={()=>{}} alt="quote created"
        imagePath={bigAvatar}
         className='order-image'
        />
        <h2>Quote Created</h2>

        <Link to={`/dashboard/${uniqueID}/inbounds/prescription/create-invoice`}>
        <Button sx={{
            width: '100%',
            backgroundColor: '#009fe3',
        }} variant="contained" >Back to Prescriptions</Button>
        </Link>
    </div>
  )
}

export default QuotedSuccessful
