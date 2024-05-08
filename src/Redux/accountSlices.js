// accountSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balances: {
    USD: 1000,
    EUR: 500,
    GBP: 200,
    // Add more currencies as needed
  },
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit: (state, action) => {
      // Handle deposit logic
    },
    withdraw: (state, action) => {
      // Handle withdrawal logic
    },
  },
});

export const { deposit, withdraw } = accountSlice.actions;
export default accountSlice.reducer;
