import React from 'react';
import Grid from '@mui/material/Grid';
import alien from '../../imgs/alien.svg';


const Header: React.FC = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{
                marginTop: 1.5,
                marginBottom: 2,
                // backgroundColor: '#4F8A39'
            }}
        >
            <img
                src={alien}
                alt="Alien inside spaceship"
                style={{width: "30%", height: "30%"}} 
            />
            <h1 style={{ fontFamily: 'Orbitron' }}>UFO Sightings</h1>
        </Grid>
    )
}

export default Header;