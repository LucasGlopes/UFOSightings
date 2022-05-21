import React from "react";
import Grid from '@mui/material/Grid';
import SightingInfo from "../SightingInfo/SightingInfo";
import { SightingProps } from "../../interfaces";

interface SightingDataProps {
  sightingData: SightingProps|undefined;
}

const Sighting: React.FC<SightingDataProps> = (props) => {
  const { sightingData } = props;

  return (
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          height: "70vh",
          width: '90%',
          // backgroundColor: 'blue'
        }}
      >
        <SightingInfo title="City" info={sightingData?.city}/>
        <SightingInfo title="State" info={sightingData?.state}/>
        <SightingInfo title="Country" info={sightingData?.country}/>
        <SightingInfo title="Date/Time" info={sightingData?.datetime}/>
        <SightingInfo title="Latitude" info={sightingData?.latitude}/>
        <SightingInfo title="Longitude" info={sightingData?.longitude}/>
        <SightingInfo title="Duration" info={sightingData?.durationHoursMin}/>
        <SightingInfo title="Shape" info={sightingData?.shape}/>
        <SightingInfo title="Comments" info={sightingData?.comments}/>
      </Grid>
  )
}

export default Sighting;