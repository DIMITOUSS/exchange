// ExchangeRates.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExchangeRates = () => {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    const apiEndpoint = 'https://v6.exchangerate-api.com/v6/d147cf108606fee43328b392/latest/USD';

    axios.get(apiEndpoint)
      .then(response => {
        console.log(response)
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
    <div>
      {Object.entries(rates).map(([currency, rate]) => (
        <div key={currency}>
          <strong>{currency}:</strong> {rate}
        </div>
      ))}
    </div>
  );
};

export default ExchangeRates;
