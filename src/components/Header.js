import { AppBar, Button, Box, } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';



function Header() {
    const useStyles = makeStyles((theme) => ({
        button:{
            display:'flex',
            gap:'1rem',
            justifyContent:'center',
            boxShadow:'none',
            marginBottom:'3rem'
            

        },
        appBar:{
            color:'white',
            backgroundColor:'red',
            boxShadow:'none'


        }
    }))
    const classes = useStyles();

  return (

        <Box className={classes.button}> 
<Button  variant="contained" color="primary" component={NavLink} to='/'> Home</Button>
<Button  variant="contained" color="primary" component={NavLink} to='/login'> Login</Button>
<Button  variant="contained" color="primary" component={NavLink} to='/exchange'> Exchange</Button>
<Button  variant="contained" color="primary" component={NavLink} to='/transactions'> Transactions</Button>
<Button  variant="contained" color="primary" component={NavLink} to='/kycaml'> KYC/AML</Button>
</Box>
      
  )
}

export default Header


