import React from 'react';
import { AppBar, Box, Toolbar, Typography, Menu, MenuItem, Container, Button } from '@mui/material';

const pages = ['Ordenes'];
const productOptions = ['Lost Caverns of Ixalan', 'Wilds of Eldraine','Fallout']; // Options under Products

function ResponsiveAppBar() {
  const [anchorElProduct, setAnchorElProduct] = React.useState(null); // State for Products menu

  const handleOpenProductMenu = (event) => {
    setAnchorElProduct(event.currentTarget);
  };

  const handleCloseProductMenu = () => {
    setAnchorElProduct(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AviD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key="Products"
              onClick={handleOpenProductMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Productos
            </Button>
            <Menu
              id="products-menu"
              anchorEl={anchorElProduct}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElProduct)}
              onClose={handleCloseProductMenu}
            >
              {productOptions.map((option) => (
                <MenuItem key={option} onClick={handleCloseProductMenu}>
                  <Typography textAlign="center">{option}</Typography>
                </MenuItem>
              ))}
            </Menu>

            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
           <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'flex-end' }}>
            <Button sx={{ my: 2, color: 'white' }}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
