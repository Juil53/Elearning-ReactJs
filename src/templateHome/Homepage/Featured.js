import React, { useEffect } from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useStyles } from "../../styles/styles";
import Cards from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { actCourseAllGet } from "../Courses/modules/actions";


export default function Featured() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const courses = useSelector(
    (state) => state.courseListReducer.dataCourseList
  );

  useEffect(() => {
    dispatch(actCourseAllGet());
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Box className={classes.title}>
          <Typography variant="p" component="p" color="text.secondary">
           THAM GIA CÁC KHOÁ HỌC CỦA CHÚNG TÔI 
          </Typography>
          <Typography variant="h2" component="h2" gutterBottom>
            NHỮNG KHOÁ HỌC MỚI NHẤT
          </Typography>
        </Box>

        <Box>
          {/* Card */}
          <Grid container rowSpacing={5} columnSpacing={2}>
            {courses &&
              courses.splice(27, 6).map((course, index) => {
                return (
                  <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
                    <Cards courses={course}/>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box className={classes.title}>
          <Typography variant="h5" style={{ color: "gray", fontWeight: "400" }}>
            Tuỳ chỉnh cài đặt cá nhân của bạn để nhận những thông báo khoá học phù hợp
            <Button
              color="primary"
              endIcon={<ArrowForwardIcon />}
              href="/courses"
              size="large"
            >
              Xem tất cả khoá học
            </Button>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
