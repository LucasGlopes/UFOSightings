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

    const teste = () => {
        console.log(sightingData)
    }

    return (
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          sx={{height: "30vh" }}
        >
            <Button
              variant="contained"
              sx={{ marginTop: "10px", width: "80%", height: "20%" }}
              onClick={teste}
            >
              Encontrar Menor Caminho
            </Button>
            {/* <div>{sightingData.city}</div> */}
        </Grid>
    )
}

export default Sighting;