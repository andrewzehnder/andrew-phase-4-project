import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


const NavBar = ({ user, setUser }) => {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phase 4 Project
          </Typography>
          <Button color="inherit" component={ Link } to="/">Home</Button>
          <Button color="inherit" component={ Link } to="/landmarks">Landmarks</Button>
          <Button color="inherit" component={ Link } to="/cities">Cities</Button>
          { user ? 
            <Button color="inherit" onClick={handleLogoutClick} >Logout</Button> : 
            <Button color="inherit" component={ Link } to="/login">Login</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar