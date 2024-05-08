// HomeComponent.js
import React from 'react';
import { Button, Typography, Box, Container, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';
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
  button: {
    margin: theme.spacing(1),
  },
}));

const HomeComponent = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box>
        <Button className={classes.button} variant="contained" color="primary" component={NavLink} to='/login'> Login</Button>
        <Button className={classes.button} variant="contained" color="primary" component={NavLink} to='/exchange'> Exchange</Button>
        <Button className={classes.button} variant="contained" color="primary" component={NavLink} to='/transactions'> Transactions</Button>
        <Button className={classes.button} variant="contained" color="primary" component={NavLink} to='/kycaml'> KYC/AML</Button>
      </Box>
      <Paper className={classes.banner}>
        <Typography variant="h5">Banner Section</Typography>

      </Paper>
      <Paper className={classes.hero}>
        <TradingViewWidget/>


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
