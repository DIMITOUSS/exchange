// src/Redux/kycamlSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVerified: false,
};

const kycamlSlice = createSlice({
  name: 'kycaml',
  initialState,
  reducers: {
    verifyKYCAML: (state) => {
      state.isVerified = true;
    },
    submitKYCAML: (state) => {
      // Add logic for submitting KYC/AML data
    },
  },
});

export const { verifyKYCAML, submitKYCAML } = kycamlSlice.actions;
export default kycamlSlice.reducer;
