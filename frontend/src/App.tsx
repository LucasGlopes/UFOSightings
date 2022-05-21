import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Map from './components/Map/Map';
import Sighting from "./components/Sighting/Sighting";
import Header from "./components/Header/Header";
import api from "./services/api";
import { SightingProps } from "./interfaces";

function App() {
  const [sightings, setSightings] = useState([]);
  const [sightingData, setSightingData] = useState<SightingProps|undefined>();

  useEffect(() => {
    getSightings();
  }, []);

  const getSightings = async () => {
    const { data } = await api.get("/sightings");
    setSightings(data);
  }

  const showSighting = async (index: number) =>{
    const { data } = await api.get(`/sightings${index}`);
    setSightingData(data);
  }


  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid 
          item xs={3}
        >
          <Header />
          <Sighting sightingData={sightingData}/>
        </Grid>
        <Grid item xs={9}>
          <Map sightings={sightings} showSighting={showSighting}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;