// HomeComponent.js
import React from 'react';
import {  Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TradingViewWidget from './TradingViewWidget';
import TradingChart from './TradingChart';
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Stock Price',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};


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
    marginTop: theme.spacing(5),
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
      <h1>Trading Chart</h1>
      <TradingChart data={chartData} />


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
