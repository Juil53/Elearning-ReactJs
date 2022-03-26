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
              HỌC VÀ TỐT NGHIỆP
            </Typography>
            <Typography variant="h2" component="h2" gutterBottom>
              ELEARNING CÓ GÌ?
            </Typography>
            <Typography
              className={classes.facilitiesTxt}
              variant="p"
              component="p"
              gutterBottom
            >
              Đội ngũ của chúng tôi, vừa là những người lập trình viên, vừa làm
              quản lý, cũng là giám đốc cũng vừa là giảng viên các trường ĐH, CĐ
              tại HCM. Chúng tôi cũng được chọn vào các chương trình huấn luyện
              kỹ năng đào tạo nghề tại đại học ARIZONA - ASU - MỸ do tập đoàn
              INTEL và chính phủ Mỹ tài trợ.
            </Typography>
            <br />
            <Typography
              className={classes.facilitiesTxt}
              variant="p"
              component="p"
              gutterBottom
            >
              Tất cả những kỹ năng, phương pháp giảng dạy tại các khóa huấn
              luyện này đều được chúng tôi áp dụng vào các khóa học đào tạo nghề
              thực tế tại Elearning Academy.
            </Typography>
            <Button variant="contained" sx={{ marginTop: "40px" }}>
              <a href="#new">TÌM HIỂU THÊM</a>
            </Button>
          </Grid>

          {/* RightSide */}
          <Grid item xs={12} lg={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper className={classes.facilitiesPaper}>
                  <WbSunnyIcon color="primary" fontSize="large" />
                  <Typography variant="h5">
                    Công nghệ mới, chuyên sâu, thực tế
                  </Typography>
                  <Typography variant="p" className={classes.facilitiesTxt}>
                    Bạn được học và trải nghiệm các công nghệ lập trình mới
                    nhất, chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ
                    doanh nghiệp.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper className={classes.facilitiesPaper}>
                  <BookIcon color="primary" fontSize="large" />
                  <Typography variant="h5">
                    Học theo lộ trình, có định hướng
                  </Typography>
                  <Typography variant="p" className={classes.facilitiesTxt}>
                    Elearning sẽ định hướng và đưa ra các lộ trình học tập cho
                    nghề bạn theo đuổi. Phát triển năng lực và niềm đam mê cảm
                    hứng lập trình của bạn.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper className={classes.facilitiesPaper}>
                  <EmojiEventsIcon color="primary" fontSize="large" />
                  <Typography variant="h5">
                    Trao tay chìa khóa thành công toàn diện
                  </Typography>
                  <Typography variant="p" className={classes.facilitiesTxt}>
                    Hướng dẫn viết CV, phỏng vấn. Kết nối doanh nghiệp, gặp gỡ
                    doanh nghiệp, phỏng vấn cùng doanh nghiệp ngay sau khi tốt
                    nghiệp.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper className={classes.facilitiesPaper}>
                  <SchoolIcon color="primary" fontSize="large" />
                  <Typography variant="h5">
                    Nền tảng, tư duy, cốt lõi trong lập trình
                  </Typography>
                  <Typography variant="p" className={classes.facilitiesTxt}>
                    Elearning cung cấp những nền tảng, giá trị tư duy cốt lõi
                    nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của
                    công nghệ và môi trường làm việc.
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
