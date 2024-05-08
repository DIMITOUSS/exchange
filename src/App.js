// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomeComponent from './components/HomeComponent';
import AuthenticationComponent from './components/AuthenticationComponent';
import ExchangeFormComponent from './components/ExchangeFormComponent';
import TransactionHistoryComponent from './components/TransactionHistoryComponent';
import AccountComponent from './components/AccountComponent';
import KYCAMLComponent from './components/KYCAMLComponent';
import Header from './components/Header';

const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5',
    },
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Header />

        <Routes>

          <Route exact path="/" element={<HomeComponent />} />
          <Route path="/login" element={<AuthenticationComponent />} />
          <Route path="/exchange" element={<ExchangeFormComponent />} />
          <Route path="/transactions" element={<TransactionHistoryComponent />} />
          <Route path="/account" element={<AccountComponent />} />
          <Route path="/kycaml" element={<KYCAMLComponent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
