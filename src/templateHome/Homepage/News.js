import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { useStyles } from "../../styles/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function News() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Box className={classes.title}>
        <Typography variant="p" component="p" color="text.secondary">
          FROM THE NEWS
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          Latest News
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={3}>
          {/* LeftSide */}
          <Grid item xs={12} md={6} className={classes.content}>
            <div className={classes.layer}></div>
            <Typography
              variant="h5"
              component="h5"
              className={classes.contentTxt}
            >
              Enhance your educational skills and also experience with best
              online courses
            </Typography>
          </Grid>

          {/* RightSide */}
          <Grid item xs={12} md={6}>
            <Grid container flexDirection="column" spacing={2}>
              <Grid item>
                <div className={classes.layer1}></div>
              </Grid>
              <Grid item>
                <div className={classes.layer2}></div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ textAlign: "center" }}>
        <Button
          color="primary"
          className={classes.viewBtn}
          endIcon={<ArrowForwardIcon />}
        >
          View All Posts
        </Button>
      </Box>
    </Container>
  );
}
