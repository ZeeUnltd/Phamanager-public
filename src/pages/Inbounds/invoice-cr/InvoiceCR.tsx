import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { Box, Paper} from '@mui/material'
import GraphArea from '../../../components/GraphArea/GraphArea'
import ReportChart from '../../../components/ReportChart/ReportChart'
import classes from './invoice.module.scss'
import Container from '../../../components/container/container'

const InvoiceCR: React.FC = () => {
  return (
    <Container type='blue-border'>
      
      <div className={classes.block}>
        <div className={classes.block__top_component}>
          <Paper sx={{
            padding: '.6em',
            display: 'flex',
            alignItems: 'center',
            marginRight: '1em',
          }}>
            <AiOutlineClockCircle/>
            <div style={{
              padding: '.3em'
            }}/>
            <p>Jan 2022 - Dec 2022</p>
          </Paper>
          <Paper sx={{
            padding: '.6em',
            display: 'flex',
            alignItems: 'center',
            marginRight: '1em',
          }}>1M</Paper>
          <Paper sx={{
            padding: '.6em',
            display: 'flex',
            alignItems: 'center',
            marginRight: '1em',
          }}>3M</Paper>
          <Paper sx={{
            padding: '.6em',
            display: 'flex',
            alignItems: 'center',
            marginRight: '1em',
          }}>6M</Paper>
          <Paper sx={{
            padding: '.6em',
            display: 'flex',
            alignItems: 'center',
            marginRight: '1em',
          }}>1Y</Paper>
        </div>
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
  )
}

export default InvoiceCR
