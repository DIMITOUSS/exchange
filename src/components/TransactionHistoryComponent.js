// TransactionHistoryComponent.js
import React from 'react';
import { Typography, Container, styled } from '@mui/material';
import { useSelector } from 'react-redux';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const TransactionHistoryComponent = () => {
  const transactions = useSelector(state => state.transactions);

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Transaction History
      </Typography>
      {/* Render transaction history data */}
    </StyledContainer>
  );
};

export default TransactionHistoryComponent;
