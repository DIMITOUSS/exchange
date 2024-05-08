// KYCAMLComponent.js
import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { submitKYCAML } from '../Redux/kycamlSlice';
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
  button: {
    marginTop: theme.spacing(2),
  },
}));

const KYCAMLComponent = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = () => {
    dispatch(submitKYCAML());
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        KYC/AML Verification
      </Typography>
      {/* Add forms for user verification */}
      <Button variant="contained" color="primary" onClick={handleSubmit} className={classes.button}>Submit</Button>
    </Container>
  );
};

export default KYCAMLComponent;
