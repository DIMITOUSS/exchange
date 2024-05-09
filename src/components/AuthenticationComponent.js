// AuthenticationComponent.js
import React from 'react';
import { Typography, Button, Box, Container, styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login, register } from '../Redux/authSlices';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const AuthenticationComponent = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const handleRegister = () => {
    dispatch(register());
  };

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Login or Register
      </Typography>
      <Box>
        <StyledButton variant="contained" color="primary" onClick={handleLogin}>Login</StyledButton>
        <StyledButton variant="contained" color="secondary" onClick={handleRegister}>Register</StyledButton>
      </Box>
    </StyledContainer>
  );
};

export default AuthenticationComponent;
