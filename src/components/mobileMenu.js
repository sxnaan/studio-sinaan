import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import ShortTextIcon from '@mui/icons-material/ShortText';
import CloseIcon from '@mui/icons-material/Close';

const MobileMenu = ({color}) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const X = (
    <Box sx={{ width: '100vw', height: '15%' }} role="presentation" onClick={toggleDrawer(false)} className='x-box'>
      <Button onClick={toggleDrawer(false)} sx={{
          textDecoration: 'none',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }}><CloseIcon fontSize='large' style={{color: "black"}}/></Button>
    </Box>
  )

  const Links = (
    <Box sx={{ width: '100vw', height: '85%' }} role="presentation" onClick={toggleDrawer(false)} className='box'>
      {['home','about', 'works', 'contact'].map((text) => (
          <Link to={(text === 'home') ? "/" : `/${text}`} style={{'textDecoration': 'none', 'color': 'black'}}>
            <h2>{text}</h2>
          </Link>
      ))}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><ShortTextIcon fontSize='large' style={{color: color}}/></Button>
      <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)} className = 'drawer'>
        {X}
        {Links}
      </Drawer>
    </div>
  );
}

export default MobileMenu;