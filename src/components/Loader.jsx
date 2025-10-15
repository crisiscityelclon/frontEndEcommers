import React from 'react';
import { Skeleton, Box } from "@mui/material";

function Loader() {
    return (
        <Box sx={{ width: 300 }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" /> 
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
        </Box>
    );
}

export default Loader;