import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
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
          <Grid item xs={12} md={6}>
            <div className={classes.layer}>
              <Grid
                container
                sx={{
                  position: "absolute",
                  zIndex: 1,
                  color: "#fff",
                  padding: "20px",
                  justifyContent: "center",
                }}
              >
                <Grid item>
                  <Typography variant="h5" component="h5" gutterBottom>
                    Enhance your educational skills and also experience with
                    best online courses
                  </Typography>
                </Grid>
                <Grid item flexGrow="1">
                  <CardActions
                    sx={{paddingTop: 2 }}
                  >
                    <Grid container sx={{ alignItems: "center" }}>
                      <Grid item>
                        <img
                          src="./img/teacher1.jpg"
                          alt=""
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="p"
                          className={classes.featuredTeacher}
                        >
                          by
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">Olivia</Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="p"
                          className={classes.featuredTeacher}
                        >
                          in
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">Programing</Typography>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Grid>
              </Grid>
            </div>
          </Grid>

          {/* RightSide */}
          <Grid item xs={12} md={6}>
            <Grid container flexDirection="column" spacing={2}>
              <Grid item>
                <div className={classes.layer1}>
                  <Grid
                    container
                    sx={{
                      position: "absolute",
                      zIndex: 1,
                      color: "#fff",
                      padding: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <Grid item>
                      <Typography variant="h5" component="h5" gutterBottom>
                        Enhance your educational skills and also experience with
                        best online courses
                      </Typography>
                    </Grid>
                    <Grid item flexGrow="1">
                      <CardActions
                        sx={{ paddingTop: 2 }}
                      >
                        <Grid container sx={{ alignItems: "center" }}>
                          <Grid item>
                            <img
                              src="./img/teacher1.jpg"
                              alt=""
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="p"
                              className={classes.featuredTeacher}
                            >
                              by
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">Olivia</Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="p"
                              className={classes.featuredTeacher}
                            >
                              in
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">Programing</Typography>
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.layer2}>
                  <Grid
                    container
                    sx={{
                      position: "absolute",
                      zIndex: 1,
                      color: "#fff",
                      padding: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <Grid item>
                      <Typography variant="h5" component="h5" gutterBottom>
                        Enhance your educational skills and also experience with
                        best online courses
                      </Typography>
                    </Grid>
                    <Grid item flexGrow="1">
                      <CardActions
                        sx={{ paddingTop: 2 }}
                      >
                        <Grid container sx={{ alignItems: "center" }}>
                          <Grid item>
                            <img
                              src="./img/teacher1.jpg"
                              alt=""
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="p"
                              className={classes.featuredTeacher}
                            >
                              by
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">Olivia</Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="p"
                              className={classes.featuredTeacher}
                            >
                              in
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">Programing</Typography>
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Grid>
                  </Grid>
                </div>
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
