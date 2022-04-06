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
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useStyles } from "../../styles/styles";
import { Link } from "react-router-dom";

export default function Cards(props) {
  const { courses } = props;
  const classes = useStyles();
  return (
    <>
      <Link to={`course-detail/${courses.maKhoaHoc}`}>
        <Card className={classes.cards}>
          <CardMedia
            component="img"
            height="200px"
            image={courses.hinhAnh}
            alt="course1"
          />
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "0",
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              color="primary"
            >
              Lượt xem: {courses.luotXem}
            </Typography>
            <Rating name="read-only" value={3} readOnly />
          </CardContent>
          <CardContent sx={{ paddingBottom: 1 }}>
            <Typography variant="h6" color="secondary" gutterBottom>
              {courses.tenKhoaHoc}
            </Typography>
            <CalendarTodayIcon sx={{ pr: 1 }} />
            <Typography variant="body1" component="span">
              {courses.ngayTao}
            </Typography>
          </CardContent>
          <CardActions sx={{ borderTop: "1px solid #eee" }}>
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
                <Typography variant="h6">
                  {courses.nguoiTao.taiKhoan}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="p" className={classes.featuredTeacher}>
                  in
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  {courses.danhMucKhoaHoc.maDanhMucKhoahoc}
                </Typography>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Link>
    </>
  );
}
