// ExchangeRates.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

const ExchangeRates = () => {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    const apiEndpoint = 'https://v6.exchangerate-api.com/v6/d147cf108606fee43328b392/latest/USD';

    axios.get(apiEndpoint)
      .then(response => {
        setRates(response.data.conversion_rates);
      })
      .catch(error => {
        console.error('Error fetching exchange rates', error);
      });
  }, []);

  if (!rates) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ width: '100%', maxHeight: 200, overflowY: 'auto' }}>
      {Object.entries(rates).map(([currency, rate]) => (
        <Typography key={currency}>
          <strong>{currency}:</strong> {rate}
        </Typography>
      ))}
    </Box>
  );
};

export default ExchangeRates;
