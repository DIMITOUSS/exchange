// ExchangeFormComponent.js
import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Container, styled, Select,  } from '@mui/material';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const ExchangeFormComponent = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');

  const handleExchange = () => {
    // Add exchange logic here
  };

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Exchange Currency
      </Typography>
      <StyledBox>
        <TextField
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {/* Add your currency options here */}
        </Select>
        <Select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {/* Add your currency options here */}
        </Select>
        <StyledButton variant="contained" color="primary" onClick={handleExchange}>Exchange</StyledButton>
      </StyledBox>
    </StyledContainer>
  );
};

export default ExchangeFormComponent;
