import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Grid,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useStyles } from "../../styles/styles";

export default function Cards() {
  const classes = useStyles();
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="300px"
          image="./img/course1.jpg"
          alt="course1"
        />
        <CardContent
          sx={{ display: "flex", justifyContent: "space-between", py: 3 }}
        >
          <Typography gutterBottom variant="h5" component="div" color="primary">
            $35.00
          </Typography>
          <Rating name="read-only" value={3} readOnly />
        </CardContent>
        <CardContent sx={{ paddingBottom: 3 }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            Open Programming Courses for everyone : Python
          </Typography>
          <AccessTimeIcon />
          <Typography variant="body1" component="span">
            20 hrs
          </Typography>
        </CardContent>
        <CardActions sx={{ borderTop: "1px solid #eee", paddingTop: 2 }}>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item>
              <img
                src="./img/teacher1.jpg"
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="p" className={classes.featuredTeacher}>
                by
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Olivia</Typography>
            </Grid>
            <Grid item>
              <Typography variant="p" className={classes.featuredTeacher}>
                in
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Programing</Typography>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}
