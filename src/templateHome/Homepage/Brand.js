import React from "react";
import { Grid, Box, Container } from "@mui/material";
import { useStyles } from "../../styles/styles";

export default function Banner() {
  const classes = useStyles();
  return (
    <Box>
      <Container maxWidth="xxl">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img className={classes.brandImg} src="./img/brand1.png" alt="" />
          </Grid>
          <Grid item xs={2}>
            <img className={classes.brandImg} src="./img/brand1.png" alt="" />
          </Grid>
          <Grid item xs={2}>
            <img className={classes.brandImg} src="./img/brand1.png" alt="" />
          </Grid>
          <Grid item xs={2}>
            <img className={classes.brandImg} src="./img/brand1.png" alt="" />
          </Grid>
          <Grid item xs={2}>
            <img className={classes.brandImg} src="./img/brand1.png" alt="" />
          </Grid>
          <Grid item xs={2}>
            <img className={classes.brandImg} src="./img/brand1.png" alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
