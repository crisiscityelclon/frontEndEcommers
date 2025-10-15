import React from 'react';
import { Paper } from "@mui/material";

function Footer(props) {
    return (
        <Paper sx={{
            marginTop: 'calc(10% + 60px)',
            position: 'fixed',
            bottom: 0,
            padding: 2,
            width: '100%',
            textAlign:'center'
        }} square variant="outlined">
            Footer - Tienda Deportiva FullStack
        </Paper>
    );
}

export default Footer;