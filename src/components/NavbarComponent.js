// NavbarComponent.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const NavbarComponent = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Currency Exchange Platform
        </Typography>
        {isLoggedIn ? (
          <Button color="inherit">Logout</Button>
        ) : (
          <Button color="inherit">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
