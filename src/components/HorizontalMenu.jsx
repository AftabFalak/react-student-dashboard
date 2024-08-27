import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const HorizontalMenu = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        
        <Button color="inherit">Home</Button>
        <Button color="inherit">Students</Button>
        <Button color="inherit">Reports</Button>
      </Toolbar>
    </AppBar>
  );
};

export default HorizontalMenu;
