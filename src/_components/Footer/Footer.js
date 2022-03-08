import React from "react";
import { Container, Grid, Typography, Button,Box } from "@mui/material";
import { useStyles } from "../../styles/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footerBg}>
      <Container>
        <Grid container spacing={2} justifyContent="center" textAlign="left">
          <Grid item xs={12} md={6} lg={4} className={classes.footerTxt}>
            <Typography variant="h4" component="h4">
              Contact Info
            </Typography>
            <Typography variant="p" component="p">
              Address: Study course, 343 marketing, #2214 cravel street, NY -
              62617.
            </Typography>
            <Typography variant="p" component="p">
              Phone : +1(21) 234 4567
            </Typography>
            <Typography variant="p" component="p">
              Email : info@example.com
            </Typography>
            <Box>
              <FacebookIcon className={classes.footerIcon}/>
              <TwitterIcon className={classes.footerIcon}/>
              <InstagramIcon className={classes.footerIcon}/>
              <LinkedInIcon className={classes.footerIcon}/>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3} className={classes.footerTxt}>
            <Typography variant="h4" component="h4">
              Company
            </Typography>
            <Typography variant="p" component="p">
              About company
            </Typography>
            <Typography variant="p" component="p">
              Latest Blog posts
            </Typography>
            <Typography variant="p" component="p">
              Became a teacher
            </Typography>
            <Typography variant="p" component="p">
              Online Courses
            </Typography>
            <Typography variant="p" component="p">
              Get in touch
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3} className={classes.footerTxt}>
            <Typography variant="h4" component="h4">
              Progams
            </Typography>
            <Typography variant="p" component="p">
              Training Center
            </Typography>
            <Typography variant="p" component="p">
              Documentation
            </Typography>
            <Typography variant="p" component="p">
              Release Status
            </Typography>
            <Typography variant="p" component="p">
              Customers
            </Typography>
            <Typography variant="p" component="p">
              Help Center
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={2}
            flexGrow={1}
            className={classes.footerTxt}
          >
            <Typography variant="h4" component="h4">
              Support
            </Typography>
            <Button>
              <img
                style={{ width: "100%" }}
                src="./img/googleplay.png"
                alt=""
              />
            </Button>
            <Button>
              <img style={{ width: "100%" }} src="./img/appstore.png" alt="" />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
