import React from 'react'
import Container from '../../../components/container/container'
import { Paper, Box } from '@mui/material'
import classes from '../../Inbounds/invoice-cr/invoice.module.scss'
import { AiOutlineClockCircle } from 'react-icons/ai'
import ReportChart from '../../../components/ReportChart'
import GraphArea from '../../../components/GraphArea'

function CustomReport() {
  return (
    <div>
       <Container type='blue-border'>
      
      <div className={classes.block}>
        <Box sx={{
          display: 'flex',
          marginTop: '1em'
        }}>
          <GraphArea/>
          <GraphArea/>
          <GraphArea/>
          <GraphArea/>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '.7em',
          marginTop: '1em'
        }}>
          <ReportChart/>
          <ReportChart/>
          <ReportChart/>
        </Box>
      </div>
    </Container>
    </div>
  )
}

export default CustomReport
