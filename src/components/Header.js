// Header.js
import {  Button, Box, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  boxShadow: 'none',
  marginBottom: '3rem',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    padding:0,
    fontSize:'0.5rem',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,

  },
}));

function Header() {
  return (
    <StyledBox> 
      <StyledButton variant="contained" component={NavLink} to='/'> Home</StyledButton>
      <StyledButton variant="contained" component={NavLink} to='/login'> Login</StyledButton>
      <StyledButton variant="contained" component={NavLink} to='/exchange'> Exchange</StyledButton>
      <StyledButton variant="contained" component={NavLink} to='/transactions'> Transactions</StyledButton>
      <StyledButton variant="contained" component={NavLink} to='/kycaml'> KYC/AML</StyledButton>
    </StyledBox>
  );
}

export default Header;
