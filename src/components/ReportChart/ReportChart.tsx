import React from 'react';

import Paper from '@mui/material/Paper';

import classes from './Report.module.scss'
// interface data {
//     argument: string
//     value: number
// }

// interface props {
//     data?: data[]
// }

const ReportChart: React.FC = (props) => {
    // const [scheme, setScheme ] = useState('')
    // const changeScheme = (e)=>{
    //     setScheme(schemeCollection[e.target.value]);
    //   }
  return (
    <Paper sx={{
        textAlign: 'center',
        width: '300px',
        padding: '2em 0'
    }}>
        <h4>Purchase summary</h4>
        <div className={classes.chart}>
            
            <div className={classes.chart__middle_text}>
                <p>Total</p>
                <p>$20,000.00</p>
            </div>
        </div>
        <div className={classes.chart__line}>
            <div className={`${classes.chart__circle} ${classes.chart__green}`}></div>
            <p>Online</p>
        </div>
        <div className={classes.chart__line}>
            <div className={classes.chart__circle}></div>
            <p>Offline</p>
        </div>
  </Paper>
  )
}

export default ReportChart
