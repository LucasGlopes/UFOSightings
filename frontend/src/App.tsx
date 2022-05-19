import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Map from './components/Map/Map';

function App() {
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid 
          item xs={3}
        >
          <div>oi</div>
        </Grid>
        <Grid item xs={9}>
          <Map />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;