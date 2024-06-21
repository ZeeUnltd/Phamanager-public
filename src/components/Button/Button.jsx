import React from 'react'

import { Button } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useParams } from 'react-router-dom';

// importing icons
import { Icon } from '@iconify/react';


// import { makeStyles } from '@material-ui/core/styles';

import classes from './button.module.scss'
import { Link } from 'react-router-dom';

const CustomButton = ({bgColor, txtColor, btnValue}) => {
  // let pop = true;

  const param = useParams();

  let uniqueID = param.id
  return (
    <div>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button 
              className={classes.btn}
              {...bindTrigger(popupState)} 
              style={{backgroundColor: bgColor, color: txtColor,}}
            >
              {btnValue}
            </Button>
            
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>
                <Icon icon="material-symbols:add-circle-rounded" className={classes.icon}/>
                <Link to={`/dashboard/${uniqueID}/inbounds/add-new-purchase`}>
                  Add new purchase
                </Link>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Icon icon="ic:round-remove-red-eye" className={classes.icon}/>
                <Link to='/inbounds/view-all-purchases'>
                  View all purchases
                </Link>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </div>
  )
}

export default CustomButton