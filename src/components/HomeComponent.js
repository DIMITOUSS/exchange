// HomeComponent.js
import React from 'react';
import { Typography, Container, Paper, styled } from '@mui/material';
import TradingViewWidget from './TradingViewWidget';
import ExchangeRates from './ExchangeRates'; 




const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: '200px',
  marginTop: theme.spacing(5),
  backgroundColor: 'white',
  marginBottom: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledHero = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: '300px',
  backgroundColor: 'white',
  marginBottom: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY:'auto',
  
  
}));

const StyledAside = styled(Paper)(({ theme }) => ({
  width: '200px',
  height: '10%',
  position: 'fixed',
  right: 0,
  top: 14,
  backgroundColor: theme.palette.grey[200],
  padding: theme.spacing(2),
  zIndex:9999
}));

const HomeComponent = () => {
  return (
    <StyledContainer>
      <StyledPaper>
        <TradingViewWidget/>
      </StyledPaper>
      <StyledHero>
        
        <ExchangeRates  /> 
      </StyledHero>
      <Typography variant="h4" gutterBottom>
        Welcome to our Currency Exchange Platform!
      </Typography>
      <StyledAside>
        <Typography variant="h6">About Our Platform</Typography>
        <Typography variant="body1">
        </Typography>
      </StyledAside>

    </StyledContainer>
  );
};

export default HomeComponent;
