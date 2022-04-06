import { Typography, Button, Box, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "../../styles/styles";

export default function Learning() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" component="h5" className={classes.sliderText}>
        Bước đầu trên con đường đến thành công!
      </Typography>
      <Typography variant="h3" component="h3" className={classes.sliderTitle}>
        Nâng cấp kỹ năng với khoá học của chúng tôi.
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            sm={6}
            sx={{ marginTop: { xs: 0, sm: 2 }, textAlign: "right" }}
          >
            <Button
              variant="outlined"
            >
              Bắt đầu ngay
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            sx={{ marginTop: { xs: 0, sm: 2 }, textAlign: "left" }}
          >
            <Button variant="contained">Liên hệ</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
