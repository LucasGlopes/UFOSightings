import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
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
        sx={{height: "30vh" }}
      >
          <div>{sightingData?.city}</div>
          <div>{sightingData?.state}</div>
          <div>{sightingData?.country}</div>
          <div>{sightingData?.datePosted}</div>
          <div>{sightingData?.datetime}</div>
          <div>{sightingData?.durationHoursMin}</div>
          <div>{sightingData?.shape}</div>
          <div>{sightingData?.latitude}</div>
          <div>{sightingData?.longitude}</div>
          <div>{sightingData?.comments}</div>
      </Grid>
  )
}

export default Sighting;