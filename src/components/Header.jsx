import React, {useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cart from '../components/Cart'

import { AppBar, Divider, IconButton, Toolbar, Button, Typography, Box } from "@mui/material";
import { useAuth} from '../context/AuthContext';
 
const Header = () => {
    const { isUserLogged, logout, login } = useAuth();
    const navigate = useNavigate();
    //Para control de login
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token');
        if (isAuthenticated) {
            login(isAuthenticated)
        }
    },[]);

    const handleLogout = () => {
        logout();
        navigate('/')
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Tienda Deportiva FULLSTACK
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
                                FAQs
                            </Button>
                        </Link>
                        <Link to='/contact'>
                            <Button
                                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                Contacto
                            </Button>
                        </Link>
                         <Link hidden={!isUserLogged} to='/panel'>
                            <Button
                                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                Panel Admin
                            </Button>
                        </Link>
                        <span style={{ marginTop: 15 }}>
                            <Cart></Cart>
                        </span>
                    </Box>
                    <IconButton color="inherit" aria-label="Admin Access">
                        <Typography variant="body1" sx={{ pr: 1 }}>
                            {!isUserLogged ?
                            <Link to='/panel'>
                                Acceso Admin
                            </Link>
                            :
                            <Link onClick={handleLogout}>
                                Cerrar Sesión
                            </Link>
                            }
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Divider style={{ marginBottom: 20 }}></Divider>
        </div>
    );
};

export default Header;