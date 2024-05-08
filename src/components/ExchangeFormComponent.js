// ExchangeFormComponent.js
import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Container } from '@mui/material';
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ExchangeFormComponent = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const classes = useStyles();

  const handleExchange = () => {
    // Add exchange logic here
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Exchange Currency
      </Typography>
      <Box className={classes.form}>
        <TextField
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {/* Add dropdowns for selecting currencies */}
        <Button variant="contained" color="primary" onClick={handleExchange} className={classes.button}>Exchange</Button>
      </Box>
    </Container>
  );
};

export default ExchangeFormComponent;
