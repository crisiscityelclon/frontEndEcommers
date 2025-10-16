import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, IconButton, Divider, Toolbar, Typography, Box, Button } from "@mui/material";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tienda Deportiva FullStack
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to='/'>
            <Button
                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                  Home
            </Button>
            </Link>
            <Link to='/terms'>
            <Button
                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                  FAQ
            </Button>
            </Link>
            <Link to='/contact'>
            <Button
                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                  Contato
            </Button>
            </Link>
            <Link to='/'>
            <Button
                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                  Acerca de
            </Button>
            </Link>
          </Box>
          <IconButton color="inherit" aria-label="Admin Acces">
            <Typography variant="bpdy1" sx={{ pr: 1 }}>
              Admin Acces
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Divider style={{marginBottom:20}}></Divider>
    </div>
  );
};

export default Header;
