import React from "react";
import { Box, Grid, Typography } from '@mui/material';

const Header = () => {
    return(
        <div>
            <Box mt={4}>
                <Grid container spacing={1} style={{ position: 'absolute', left: '50%' }}>
                    <Typography>YLIN LAUTA</Typography>
                </Grid>
            </Box>
        </div>
    );
}

export default Header;