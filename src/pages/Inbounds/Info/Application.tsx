import React from 'react'
import {Box, Button} from '@mui/material'
import {SendSharp, Bookmarks, ArrowCircleLeft } from '@mui/icons-material';
import Dispensary from '../../../components/Dispensary'
import "./index.css"

const object = [
    {
        title: 'Applicant type',
        value: 'Individual'
    },
    {
        title: 'Applicant birth date',
        value: '05-12-1995'
    },{
        title: 'Prescribing health facility',
        value: 'Quadri Ltd'
    },{
        title: 'First name',
        value: 'Ajibola'
    },{
        title: 'Last name',
        value: 'Quadri'
    },{
        title: 'Allergies',
        value: 'dog'
    },{
        title: 'Applicant Gender',
        value: 'Male'
    },{
        title: 'Applicant NIN',
        value: '12345678901'
    },{
        title: 'Delivery Address',
        value: 'I22, abeokuta street, Lagos'
    },{
        title: 'Recurring delivery',
        value: 'Yes'
    },{
        title: 'Frequency',
        value: '1'
    },{
        title: 'Contact phone number',
        value: '08012345678'
    },{
        title: 'Duration',
        value: '1'
    },{
        title: 'Quantity',
        value: '1'
    }
]

const Application: React.FC = () => {
  return (
    <div className='application-container'>
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: '10fr 4fr',
        }}>
            <Dispensary/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Button sx={{
                    marginBottom: '.8em',
                }} variant='contained' startIcon={<SendSharp />}>Contact Buyer</Button>
                <Button sx={{
                    marginBottom: '.8em',
                }} variant="outlined" startIcon={<Bookmarks />}>Bookmark</Button>
                <Button sx={{
                    marginBottom: '.8em',
                }} variant="outlined" startIcon={<ArrowCircleLeft />}>Back to inbounds</Button>
            </Box>
        </Box>
        <h3>Applicant information</h3>
        <div className="application">

        {
            object.map((val) => (
                <div>
                    <p>{val.title}</p>
                    <p>{val.value}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Application;
