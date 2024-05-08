// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlices';
import accountReducer from './accountSlices';
import exchangeReducer from './exchangeSlice';
import transactionReducer from './transactionSlice';
import kycamlReducer from './kycamlSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  exchange: exchangeReducer,
  transaction: transactionReducer,
  kycaml: kycamlReducer,
});

export default rootReducer;
