import { Typography, Button, Box, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "../../styles/styles";

export default function Learning() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" component="h5" className={classes.sliderText}>
        Take the first step to your journey to success with us
      </Typography>
      <Typography variant="h1" component="h1" className={classes.sliderTitle}>
        Enhance your skills with best online courses
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} sx={{ marginTop: { xs: 0, sm: 2 },textAlign:'end' }}>
          <Button variant="outlined">Get started now</Button>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginTop: { xs: 0, sm: 2 } }}>
          <Button variant="contained">Contact Us</Button>
        </Grid>
      </Grid>
    </>
  );
}
