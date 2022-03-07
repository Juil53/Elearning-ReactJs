import React from "react";
import { Container, Typography, Paper, Box, Grid } from "@mui/material";
import { useStyles } from "../../styles/styles";
import Slider from "react-slick";
import { useRef } from "react";
import slick from "./../../styles/slick.css";

export default function Testimonial() {
  const classes = useStyles();

  //Slick setting
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    draggable:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: i => (<div style={{position:"absolute",width:'100%',top:'-10px',opacity:0}}>{i}</div>)
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box className={classes.title}>
          <Typography variant="p" component="p" color="text.secondary">
            TESTIMONIALS
          </Typography>
          <Typography variant="h2" component="h2" gutterBottom>
            Happy Clients & Feedbacks
          </Typography>
        </Box>

        <div className={classes.slickWrapper}>
          <Slider {...settings} dotsClass="slick-dots line-indicator">
            {[1, 2, 3, 4, 5].map((paper, index) => {
              return (
                <div key={index} sx={{ textAlign: "center" }}>
                  <Paper className={classes.testPaper}>
                    <q className={classes.quote}>
                      Lorem ipsum dolor sit amet elit. Velit beatae laudantium
                      voluptate rem ullam dolore nisi voluptatibus esse quasi,
                      doloribus tempora. Dolores molestias adipisci dolo amet!.
                    </q>
                    <Grid container pt={2} spacing={2}>
                      <Grid item xs={4}>
                        <img
                          src="./img/teacher2.jpg"
                          className={classes.testImg}
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h6">John Wilson</Typography>
                        <Typography variant="p" color="text.disabled">
                          Student
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </>
  );
}
