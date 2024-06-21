import React from 'react'

import { Button } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

// importing icons
import { Icon } from '@iconify/react';

import { Link } from 'react-router-dom';

const ManagerButton = ({title, inputValue}) => {

   const {
        firstValue,
        firstLink,
        secondValue,
        secondLink
    } = inputValue

    const options = [
        {
            value: firstValue,
            to: firstLink,
            icon: "material-symbols:add-circle-rounded"
        },
        {
            value: secondValue,
            to: secondLink,
            icon: "ic:round-remove-red-eye"
        }
    ]
  // let pop = true;
  return (
    <div>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button 
              className='p-3'
              {...bindTrigger(popupState)} 
              style={{backgroundColor: '#009FE3', color: '#fff', padding: '10px',}}
            >
              {title}
            </Button>
            
            <Menu {...bindMenu(popupState)}>

                {options.map((option, i) => <MenuItem key={i} onClick={popupState.close}>
                <Icon icon={option.icon} style={{
                        marginRight: "5px"
                    }} fontSize="20px"className={''}/>
                <Link to={option.to}>
                  {option.value}
                </Link>
              </MenuItem> )}
              
              {/* <MenuItem onClick={popupState.close}>
                <Icon icon="ic:round-remove-red-eye" className={classes.icon}/>
                <Link to='/inbounds/view-all-purchases'>
                  View all purchases
                </Link>
              </MenuItem> */}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </div>
  )
}

export default ManagerButton