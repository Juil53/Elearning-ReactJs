import React from "react";
import { Container, Grid, Button, Typography, Paper } from "@mui/material";
import { useStyles } from "../../styles/styles";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BookIcon from "@mui/icons-material/Book";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";

export default function Facilities() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* LeftSide */}
          <Grid item xs={12} lg={6}>
            <Typography variant="caption" component="h2" gutterBottom>
              STUDY AND GRADUATE
            </Typography>
            <Typography variant="h2" component="h2" gutterBottom>
              Our Facilities
            </Typography>
            <Typography
              className={classes.facilitiesTxt}
              variant="p"
              component="p"
              gutterBottom
            >
              Curabitur id gravida risus. Fusce eget ex fermentum, ultricies
              nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis
              eros et, commodo risus. Nullam sit amet laoreet elit. Suspendisse
              non magna a velit efficitur.
            </Typography>
            <br />
            <Typography
              className={classes.facilitiesTxt}
              variant="p"
              component="p"
              gutterBottom
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              ab qui impedit, libero illo quia sequi quibusdam iure. Error minus
              quod reprehenderit quae dolor velit soluta animi voluptate dicta
              enim? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odio, provident!
            </Typography>
            <Button variant="contained" sx={{ marginTop: "40px" }}>
              Discover More
            </Button>
          </Grid>

          {/* RightSide */}
          <Grid item xs={12} lg={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper className={classes.facilitiesPaper}>
                  <WbSunnyIcon color="primary" fontSize="large" />
                  <Typography variant="h5">Global Certificate</Typography>
                  <Typography variant="p" className={classes.facilitiesTxt}>
                    Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                    doloramet laoreet.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper className={classes.facilitiesPaper}>
                  <BookIcon color="primary" fontSize="large" />
                  <Typography variant="h5">Books & Library</Typography>
                  <Typography variant="p" className={classes.facilitiesTxt}>
                    Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                    doloramet laoreet.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper className={classes.facilitiesPaper}>
                  <EmojiEventsIcon color="primary" fontSize="large" />
                  <Typography variant="h5">Scholarship</Typography>
                  <Typography variant="p" className={classes.facilitiesTxt}>
                    Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                    doloramet laoreet.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper className={classes.facilitiesPaper}>
                  <SchoolIcon color="primary" fontSize="large" />
                  <Typography variant="h5">Alumni Support</Typography>
                  <Typography variant="p" className={classes.facilitiesTxt}>
                    Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                    doloramet laoreet.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}
