import React from "react";
import { Container, Grid, Typography, Button, Paper, Box } from "@mui/material";
import { useStyles } from "../../styles/styles";
export default function Teacher() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={5}>
        {/* LeftSide */}
        <Grid item xs={12} lg={5}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="p" component="p" color="text.secondary">
              GIÁO VIÊN KINH NGHIỆM
            </Typography>
            <Typography variant="h2" component="h2" gutterBottom>
              Đội ngũ giảng viên
            </Typography>

            <Typography variant="p" component="p" color="text.disabled">
              Curabitur id gravida risus. Fusce eget ex fermentum, ultricies
              nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis
              eros et, commodo risus. Nullam sit amet laoreet elit. Suspendisse
              non magna a velit efficitur.
            </Typography>
            <br />
            <Typography variant="p" component="p" color="text.disabled">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              ab qui impedit, libero illo quia sequi quibusdam iure. Error minus
              quod reprehenderit quae dolor velit soluta animi voluptate dicta
              enim? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odio, provident!
            </Typography>
            <br />
            <Button variant="contained" sx={{ marginTop: 3 }}>
              Tìm hiểu thêm
            </Button>
          </Box>
        </Grid>

        {/* RightSide */}
        <Grid item xs={12} lg={7}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className={classes.imgSize}>
                <img
                  className={classes.teacherImg}
                  src="./img/teacher2.jpg"
                  alt=""
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.imgSize}>
                <img
                  className={classes.teacherImg}
                  src="./img/team3.jpg"
                  alt=""
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.imgSize}>
                <img
                  className={classes.teacherImg}
                  src="./img/team3.jpg"
                  alt=""
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.imgSize}>
                <img
                  className={classes.teacherImg}
                  src="./img/team4.jpg"
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
