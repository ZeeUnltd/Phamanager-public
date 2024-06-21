import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Icon } from '@iconify/react';

import images from '../../../constants/images'

import classes from '../table.module.scss'

// setting a global variable to tweak the content of the table if there are any records or not
let record  = true;

const row = [
    {
        name: 'Payment confirmation - Order ID 406-2323-12334',
        date: 'Fri Jun 15,2022 GMT 13:00',
        price: '2 packs',
    },
    {
        name: 'Payment confirmation - Order ID 406-2323-12334',
        date: 'Fri Jun 15,2022 GMT 13:00',
        price: '2 packs',
    },
    {
        name: 'Payment confirmation - Order ID 406-2323-12334',
        date: 'Fri Jun 15,2022 GMT 13:00',
        price: '2 packs',
    },
    {
        name: 'Payment confirmation - Order ID 406-2323-12334',
        date: 'Fri Jun 15,2022 GMT 13:00',
        price: '2 packs',
    },
]

const HistoryTable = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          
          <TableHead>
            <TableRow >
              <TableCell style={{padding: '25px', fontSize: '20px', fontWeight: '900', color: '#4B4B4B'}}>Recent Activities</TableCell>
              <TableCell align="right" style={{padding: '25px', fontSize: '18px', fontWeight: '900', color: '#54A4CC', textDecoration: 'underline'}}>View All</TableCell>
            </TableRow>
          </TableHead>

          {record ? 
            <TableBody>
              {row.map((row, index) => (
                
                <TableRow
                  key={`row_${index}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div className={classes.cellHolder}>
                        <div className={classes.icon_holder}>
                            <Icon icon='ic:outline-arrow-outward' className={classes.icon} />
                        </div>
                        <div className={classes.text_holder}>
                          <p className={classes.order}>
                            {row.name}
                          </p>
                          
                          <p className={classes.date}>
                          {row.date}
                          </p>
                        </div>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <p className={classes.price}>
                      {row.price}
                    </p>
                  </TableCell>
                </TableRow>

              ))}
            </TableBody>
            :
            <div className={classes.no_record}>
              <div className={classes.no_record_text}>
                <p className={classes.text}>You have no previous inbound</p>
                <p className={classes.text}>Create your first inbound</p>
                <p className={classes.text}>Just click the ‘counter manager’ button above to begin.</p>
              </div>

              <div className={classes.icon_holder}>
                {/* <Icon icon='ic:baseline-sentiment-very-dissatisfied' className={classes.icon} /> */}
                <img src={images.no_recent} alt="img loading ...." />
              </div>
            </div>
        }    
        </Table>
      </TableContainer>
    </div>
  )
}

export default HistoryTable
