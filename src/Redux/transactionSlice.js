// src/Redux/transactionSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    // Add other transaction-related actions here as needed
  },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
