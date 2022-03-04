import { Typography, Button } from "@mui/material";
import { useStyles } from "../../styles/styles";
import React from "react";
import News from "./News";
import Facilities from "./Facilities";
import Featured from "./Featured";
import Learning from "./Learning";

export default function Homepage() {
  const classes = useStyles();
  return (
    <div>
      {/* Start Slider */}
      <section className={classes.slider}>
        <Typography variant="h1" component="h1" className={classes.sliderTitle}>
          Enhance your skills with best online courses
        </Typography>
        <Typography variant="h5" component="h5" className={classes.sliderText}>
          Take the first step to your journey to success with us
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 5 }}>
          Ready to get started?
        </Button>
      </section>
      {/* End Slider */}

      {/* Start Featured */}
      <section className={classes.featuredbg}>
        <Featured />
      </section>
      {/* End Courses */}

      {/* Start Facilities */}
      <section className={classes.facilitiesbg}>
        <Facilities />
      </section>
      {/* End Facilities */}

      {/* Start News */}
      <section className={classes.newBg}>
        <News />
      </section>
      {/* End News */}

      {/* Start Learning */}
      <section className={classes.learningBg}>
        <Learning/>
      </section>

    </div>
  );
}
