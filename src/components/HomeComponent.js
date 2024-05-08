// HomeComponent.js
import React from 'react';
import {  Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TradingViewWidget from './TradingViewWidget';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  banner: {
    width: '100%',
    height: '200px',
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    width: '100%',
    height: '300px',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aside: {
    width: '200px',
    height: '100%',
    position: 'fixed',
    right: 0,
    top: 0,
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(2),
  },
}));

const HomeComponent = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper className={classes.banner}>
        <TradingViewWidget/>


      </Paper>
      <Paper className={classes.hero}>


      </Paper>
      <Typography variant="h4" gutterBottom>
        Welcome to our Currency Exchange Platform!
      </Typography>
      
      <Paper className={classes.aside}>
        <Typography variant="h6">Aside Section</Typography>

      </Paper>
      
    </Container>
    
  );
};

export default HomeComponent;
