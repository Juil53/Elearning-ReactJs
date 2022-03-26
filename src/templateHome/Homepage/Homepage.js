import { Typography, Button } from "@mui/material";
import { useStyles } from "../../styles/styles";
import React from "react";
import News from "./News";
import Facilities from "./Facilities";
import Featured from "./Featured";
import Testimonial from "./Testimonial";
import Brand from "./Brand";

export default function Homepage() {
  const classes = useStyles();
  return (
    <div>
      {/* Start Slider */}
      <section className={classes.slider}>
        <Typography variant="h3" component="h1" className={classes.sliderTitle}>
          NÂNG CAO KỸ NĂNG VỚI NHỮNG KHOÁ HỌC TỐT NHẤT!
        </Typography>
        <Typography variant="h5" component="h5" className={classes.sliderText}>
          Bước đầu đến với chuyến hành trình thành công.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 5 }}>
          <a href="#feature">Sẵn sàng chưa?</a>
        </Button>
      </section>
      {/* End Slider */}

      {/* Start Featured */}
      <section id="feature" className={classes.featuredbg}>
        <Featured />
      </section>
      {/* End Courses */}

      {/* Start Facilities */}
      <section className={classes.facilitiesbg}>
        <Facilities />
      </section>
      {/* End Facilities */}

      {/* Start News */}
      <section id="new" className={classes.newBg}>
        <News />
      </section>
      {/* End News */}

      {/* Start Testimonials */}
      <section className={classes.testBg}>
        <Testimonial />
      </section>
      {/* End Testimonial */}

      {/* Start Brand */}
      <section>
        <Brand />
      </section>
    </div>
  );
}
