import { Grid } from '@mui/material';
import React from 'react';
import LoadingSpin from "react-loading-spin";

const LoadingPage: React.FC = () => {
    return (
        <Grid 
            container 
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ 
              height: "100%",
              width: "100%",
              backgroundColor: '#4F8A39',
        }}>
            <LoadingSpin 
                width="0.938rem"
                size="12.5rem"
                primaryColor="#0E0E0E"
                secondaryColor="#B7BCAF"
                numberOfRotationsInAnimation={2}
            />
            <h1 style={{ fontFamily: 'Orbitron'}}>Loading UFO Sightings...</h1>
        </Grid>
    )
}

export default LoadingPage;