// KYCAMLComponent.js
import React from 'react';
import { Typography, Button, Container, styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { submitKYCAML } from '../Redux/kycamlSlice';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const KYCAMLComponent = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(submitKYCAML());
  };

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        KYC/AML Verification
      </Typography>
      {/* Add forms for user verification */}
      <StyledButton variant="contained" color="primary" onClick={handleSubmit}>Submit</StyledButton>
    </StyledContainer>
  );
};

export default KYCAMLComponent;
