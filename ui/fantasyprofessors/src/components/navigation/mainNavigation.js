import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import { AuthContext } from "../../context/authenticationContext";
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Button } from '@mui/material'
 

const MainNavigation = props => {
  const auth = useContext(AuthContext)


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
            <NavLink to='/'>
              
              
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    flex: 4,
                  }}
                  style={{textDecoration: 'none', color: 'white'}}
                >
                  <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, top: '50%' }} />
                  FANTASYPROFESSORS
                </Typography>
              </NavLink>



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
                    <NavLink to='/articles'>
                      <Typography textAlign="center">Articles</Typography>
                    </NavLink>
                  </MenuItem>
                  {auth.isAdmin && (
                    <MenuItem key={"Create"} onClick={handleCloseNavMenu}>
                      <NavLink to="/create">
                        <Typography textAlign="center">Create</Typography>
                      </NavLink>
                    </MenuItem>
                  )}
                  {!auth.isLoggedIn ?
                    (<MenuItem key={'Login'} onClick={handleCloseNavMenu}>
                      <NavLink to='/auth'>
                        <Typography textAlign="center">Login</Typography>
                      </NavLink>
                    </MenuItem>) :
                    (<MenuItem key={'Logout'} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" onClick={auth.logout}>Login</Typography>
                    </MenuItem>)
                  }
                </Menu>
              </Box>
              <NavLink to='/'>
              
              
                <Typography
                  variant="h5"
                  noWrap
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
                  style={{textDecoration: 'none', color: 'white', textAlign: 'left'}}
                >
                  <SchoolIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                  FANTASYPROFESSORS
                </Typography>
              </NavLink>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                <NavLink to="/articles">
                    <Button key="Articles" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Articles</Button>
                </NavLink>
                {auth.isAdmin && (
                  <NavLink to="/create">
                    <Button key="Create" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Create</Button>
                  </NavLink>
                )}
                {!auth.isLoggedIn ?
                  (<NavLink to="/auth">
                      <Button key="Login" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Login</Button>
                  </NavLink>) :
                  (
                    <Button key={"Logout"} onClick={() => {handleCloseNavMenu(); auth.logout()}} sx={{ my: 2, color: 'white', display: 'block' }}>Logout</Button>
                  )
                }

              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
    
}

export default MainNavigation;