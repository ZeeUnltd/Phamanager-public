import React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { Link, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Icon } from "@iconify/react";
import { images } from "../../constants";
import classes from "./Sidebar.module.scss";

import {sidebarNavAbove, sidebarNavBelow} from "../../config/sidebarNav";

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

interface props {
  toggler: Function
}

export default function MiniDrawer({toggler}: props) {
  const [open, setOpen] = React.useState(true);
  const [subRoute, setSubRoute] = React.useState('')
  const [activeIndex, setActiveIndex] = React.useState(1);
  const location = useLocation();

  
  const handleDrawerOpen = () => {
    setOpen(true);
    toggler(true)
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
    toggler(false)
  };
  
  React.useEffect(() => {
    const curPath = window.location.pathname.split("/");
    setSubRoute(curPath.join('/'))
    const sideBarNav = [...sidebarNavAbove, ...sidebarNavBelow]
    const activeItem = sideBarNav.findIndex((item) => item.section === curPath[1]);
    setActiveIndex(curPath.join('/') === '/' ? 0 : activeItem);
  }, [location]);
  return (
    <div className={classes.sidebar}  style={{ 
      display: 'flex',
      // flexGrow: 1,
    }}
    
    >
      <div className={classes.sidebar__content}>
        
        <CssBaseline />
        <Drawer className="bar"
        PaperProps={{
          sx: {
            backgroundColor: "#FFFFFF",
            color: "#737373",
          },
          style: {
            width: open? '300px': '70px',
          },
        }}
        variant="permanent" open={open}>
          <Box
          sx={{
            display: 'flex',
            justifyContent: open ? 'space-between' : 'center',
            alignItems: "center"

          }}
        >
              {open && <div className={classes.sidebar__logo}>
                  <img src={images.logo} alt="digikala" />
              </div>}
              <DrawerHeader>
              {/* <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
              >
                  {open ? <ChevronLeftIcon 
                  onClick={handleDrawerClose}/> : 
                  <MenuIcon
                  onClick={handleDrawerOpen}/>}
              </IconButton> */}
              {/* LazyCode commented the button to close the sidebar because tobi requested for that it might be tempoary */}
              </DrawerHeader>
        </Box>
          <List>
            {sidebarNavAbove.map((nav, index) => (
              <ListItem key={nav.text} disablePadding sx={{ 
                display: 'block',
                marginTop: '15px',
                marginBottom: '15px',
          }}>
              <Link
              to={nav.link}
              key={`nav-${index}`}
              className={`${classes.sidebar__menu__item} ${
                activeIndex === nav.id && classes.active
              }`}
            >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    "&:hover": {backgroundColor: "transparent", color: "inherit"}
                  }}
                  >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                    >
                  <div className={classes.sidebar__menu__item__icon}>
                    <Icon color={activeIndex === nav.id? "white": "#009FE3"} icon={nav.icon} />
                  </div>
                  </ListItemIcon>
                  <ListItemText  primary={nav.text} sx={{ opacity: open ? 1 : 0}} 
                  />
                </ListItemButton>
                </Link>
                {nav.subList && activeIndex === nav.id &&<List>
                  {nav.subList.map((nav, index) => (
                    <ListItem key={nav.text} disablePadding sx={{ 
                      display: open? 'block': 'none',
                marginTop: '15px',
                marginBottom: '15px',
                marginLeft: '2em'
              }}>
                <Link
              to={nav.link}
              key={`nav-${index}`}
              className={`${classes.sidebar__menu__item} ${
                subRoute === nav.link && classes.subnav
              }`}
            >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    "&:hover": {backgroundColor: "transparent", color: "inherit"}
                  }}
                  >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                    >
                    <div className={classes.sidebar__menu__item__icon}>
                      <Icon color={subRoute === nav.link? "#009FE3": "#4B5B65"} icon={nav.icon} />
                    </div>
                  </ListItemIcon>
                  <ListItemText  primary={nav.text} sx={{ color: open ? 1 : 0}} 
                  />
                </ListItemButton>
                </Link>
              </ListItem>)
              )}
                </List>}
              </ListItem>
            ))}
          </List>
          <Divider sx={{
            // marginTop: '30px',
            // marginBottom: '30px',
            borderBottom: '0.5 solid #737373',
            width: '90%',
            alignSelf: 'center',
          }}/>
          <List>
            {sidebarNavBelow.map((nav, index) => (
              <Link
              to={nav.link}
              key={`nav-${index}`}
              className={`${classes.sidebar__menu__item} ${
                activeIndex === nav.id && classes.active
              }`}>

              <ListItem key={nav.text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    "&:hover": {backgroundColor: "transparent", color: "inherit"}
                  }}
                  >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                    >
                    <div className={classes.sidebar__menu__item__icon}>
                    <Icon color={activeIndex === nav.id? "white": "#009FE3"} icon={nav.icon} />
              </div>
                  </ListItemIcon>
                  <ListItemText primary={nav.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>
            ))}
          </List>
        </Drawer>
      </div>
    </div>
  );
}