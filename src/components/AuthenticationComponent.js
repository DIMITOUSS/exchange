// AuthenticationComponent.js
import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login, register } from '../Redux/authSlices';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const AuthenticationComponent = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleLogin = () => {
    dispatch(login());
  };

  const handleRegister = () => {
    dispatch(register());
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Login or Register
      </Typography>
      <Box>
        <Button className={classes.button} variant="contained" color="primary" onClick={handleLogin}>Login</Button>
        <Button className={classes.button} variant="contained" color="secondary" onClick={handleRegister}>Register</Button>
      </Box>
    </Container>
  );
};

export default AuthenticationComponent;
