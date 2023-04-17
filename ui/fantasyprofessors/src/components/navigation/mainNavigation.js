import React from "react";
import { NavLink } from 'react-router-dom'


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SchoolIcon from '@mui/icons-material/School';

import "./mainNavigation.css"
 

const MainNavigation = props => {


    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    
    return (
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  flex: 4
                }}
              >
                FANTASYPROFESSORS
              </Typography>
    



              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="Menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <MenuItem key={'Articles'} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Articles</Typography>
                  </MenuItem>
                  <MenuItem key={'Login'} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <SchoolIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                FANTASYPROFESSORS
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                <NavLink to="/articles">
                    <Button key="Articles" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Articles</Button>
                </NavLink>
                <NavLink to="/login">
                    <Button key="Login" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Login</Button>
                </NavLink>

              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
    
}

export default MainNavigation;