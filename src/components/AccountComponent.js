// AccountComponent.js
import React from 'react';
import { Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw } from '../Redux/accountSlices';

const AccountComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleDeposit = () => {
    dispatch(deposit());
  };

  const handleWithdraw = () => {
    dispatch(withdraw());
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Account Details
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Username: {user.username}
      </Typography>
      {/* Display user balances and provide options for deposit and withdrawal */}
      <Button variant="contained" onClick={handleDeposit}>Deposit</Button>
      <Button variant="contained" onClick={handleWithdraw}>Withdraw</Button>
    </div>
  );
};

export default AccountComponent;
