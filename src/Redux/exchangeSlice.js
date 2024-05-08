// exchangeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exchangeRate: 1.0, // Placeholder value
  fromCurrency: '',
  toCurrency: '',
  amount: 0,
};

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    setExchangeRate: (state, action) => {
      state.exchangeRate = action.payload;
    },
    setFromCurrency: (state, action) => {
      state.fromCurrency = action.payload;
    },
    setToCurrency: (state, action) => {
      state.toCurrency = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    performExchange: (state) => {
      // Handle exchange logic
    },
  },
});

export const { setExchangeRate, setFromCurrency, setToCurrency, setAmount, performExchange } = exchangeSlice.actions;
export default exchangeSlice.reducer;
