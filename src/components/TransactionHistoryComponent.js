// TransactionHistoryComponent.js
import React from 'react';
import { Typography,  Container } from '@mui/material';
import { useSelector } from 'react-redux';
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
}));

const TransactionHistoryComponent = () => {
  const transactions = useSelector(state => state.transactions);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Transaction History
      </Typography>
      {/* Render transaction history data */}
    </Container>
  );
};

export default TransactionHistoryComponent;
