// TransactionHistoryComponent.js
import React from 'react';
import { Typography, Container, styled, List, ListItem, ListItemText } from '@mui/material';
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
      <List>
        {transactions.map((transaction, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Transaction ${index + 1}: ${transaction.amount} ${transaction.fromCurrency} to ${transaction.toCurrency}`} />
          </ListItem>
        ))}
      </List>
    </StyledContainer>
  );
};

export default TransactionHistoryComponent;
