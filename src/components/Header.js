// Header.js
import {  Button, Box, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  boxShadow: 'none',
  marginBottom: '3rem',
}));

function Header() {
  return (
    <StyledBox> 
      <Button variant="contained" color="primary" component={NavLink} to='/'> Home</Button>
      <Button variant="contained" color="primary" component={NavLink} to='/login'> Login</Button>
      <Button variant="contained" color="primary" component={NavLink} to='/exchange'> Exchange</Button>
      <Button variant="contained" color="primary" component={NavLink} to='/transactions'> Transactions</Button>
      <Button variant="contained" color="primary" component={NavLink} to='/kycaml'> KYC/AML</Button>
    </StyledBox>
  );
}

export default Header;
