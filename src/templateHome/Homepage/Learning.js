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
      <Typography variant="h3" component="h3" className={classes.sliderTitle}>
        Enhance your skills with best online courses
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            sm={6}
            sx={{ marginTop: { xs: 0, sm: 2 }, textAlign: "right" }}
          >
            <Button variant="outlined" sx={{ padding: { xs: "15px 10px" } }}>
              Get started now
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            sx={{ marginTop: { xs: 0, sm: 2 }, textAlign: "left" }}
          >
            <Button variant="contained" sx={{ padding: { xs: "15px 10px" } }}>
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
