import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Map from './components/Map/Map';
import Sighting from "./components/Sighting/Sighting";
import Header from "./components/Header/Header";
import api from "./services/api";
import { SightingProps } from "./interfaces";
import Swal from "sweetalert2";

function App() {
  const [sightings, setSightings] = useState([]);
  const [sightingData, setSightingData] = useState<SightingProps|undefined>();
  const [isMarkerClicked, setIsMarkerClicker] = useState(false);

  useEffect(() => {
    getSightings();
  }, []);

  const getSightings = async () => {
    try{
      const { data } = await api.get("/sightings");
      setSightings(data);
    }
    catch{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        showCloseButton: true,
      })
    }
  }

  const showSighting = async (index: number) =>{
    try{
      const { data } = await api.get(`/sightings${index}`);
      setSightingData(data);
      setIsMarkerClicker(true);
    } catch{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        showCloseButton: true,
      })
    }
  }


  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Grid container sx={{ height: "100%"}}>
        <Grid 
          item xs={3}
          sx={{ border: 5}}
        >
          <Grid 
            container 
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ 
              height: "100%",
              width: "100%",
              // backgroundColor: '#031202',
              backgroundColor: '#4F8A39',
          }}>
            <Header />
            {isMarkerClicked ? <Sighting sightingData={sightingData}/> : <div>oi</div>}
          </Grid>
        </Grid>
        <Grid 
          item xs={9} 
          sx={{ border: 5, borderLeft: 0}}
        >
          <Map sightings={sightings} showSighting={showSighting}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;