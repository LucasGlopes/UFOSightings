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
        alignItems="flex-start"
        sx={{
          height: "60vh",
          width: '90%',
          backgroundColor: '#4F8A39',
          border: 6,
          borderRadius: 7,
          padding: 2
        }}
      >
        <SightingInfo title="City" info={sightingData?.city.toUpperCase()}/>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <SightingInfo title="State" info={sightingData?.state.toUpperCase()}/>
          <SightingInfo title="Country" info={sightingData?.country.toUpperCase()}/>
        </Grid>
        <SightingInfo title="Date/Time" info={sightingData?.datetime}/>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <SightingInfo title="Latitude" info={sightingData?.latitude}/>
          <SightingInfo title="Longitude" info={sightingData?.longitude}/>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <SightingInfo title="Duration" info={sightingData?.durationHoursMin}/>
          <SightingInfo title="Shape" info={sightingData?.shape}/>
        </Grid>
        <SightingInfo title="Comments" info={sightingData?.comments}/>
      </Grid>
  )
}

export default Sighting;