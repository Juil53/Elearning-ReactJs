import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { GROUP_NUMBER } from "../../modules/constants";

export default function AddOrUpdateCourse(props) {
  const styles = {
    root: {
      padding: "20px",
      margin: "0 auto",
      "& h1": {
        fontSize: "28px",
        fontWeight: 600,
        padding: 0,
        mb: "20px",
      },
    },
    inputFile: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    button: {
      padding: "10px 50px",
      fontSize: "20px",
      marginTop: "5px",
    },
  };

  let { action } = useParams();

  const [courseDetail, setCourseDetail] = useState({
    maKhoaHoc: "",
    tenKhoaHoc: null,
    moTa: null,
    luotXem: 0,
    danhGia: 0,
    hinhAnh: null,
    maNhom: GROUP_NUMBER,
    ngayTao: null,
    maDanhMucKhoaHoc: null,
    taiKhoanNguoiTao: null,
  });

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setCourseDetail({
      ...courseDetail,
      [name]: value,
    });
  };

  const handleChangeImage = (e) => {
    let file = e.target.files[0];
    setCourseDetail({ ...courseDetail, hinhAnh: file.name });
    console.log(courseDetail);
  };

  return (
    <Fragment>
      <Box
        component="main"
        sx={{ width: `calc(100% - ${165}px)`, ml: `${165}px` }}
      >
        <Box sx={styles.root}>
          <Typography variant="h1">
            {action === "add" ? "Thêm Khóa Học" : "Chỉnh Sửa Khóa Học"}
          </Typography>
          <Box
            component="form"
            sx={{
              // paddingLeft: "100px",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              "& .MuiFormControl-root": {
                my: 1,
                width: "49%",
              },
            }}
          >
            <TextField
              label="Mã Khóa Học"
              type="text"
              value={courseDetail.maKhoaHoc ?? ""}
              name="maKhoaHoc"
              onChange={handleChangeInput}
            />
            <TextField
              label="Tên Khóa Học"
              type="text"
              value={courseDetail.tenKhoaHoc ?? ""}
              name="tenKhoaHoc"
              onChange={handleChangeInput}
            />
            <FormControl>
              <InputLabel id="courseCategory">Danh mục khóa học</InputLabel>
              <Select
                labelId="courseCategory"
                label="Danh mục khóa học"
                value={courseDetail.maDanhMucKhoaHoc ?? ""}
                name="maDanhMucKhoaHoc"
                onChange={handleChangeInput}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="courseCategory">Người Tạo</InputLabel>
              <Select
                labelId="courseCategory"
                label="Người Tạo"
                value={courseDetail.taiKhoanNguoiTao ?? ""}
                name="taiKhoanNguoiTao"
                onChange={handleChangeInput}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Ngày Tạo"
              type="text"
              value={courseDetail.ngayTao ?? ""}
              name="ngayTao"
              onChange={handleChangeInput}
            />
            <TextField
              label="Mô Tả"
              type="textarea"
              value={courseDetail.moTa ?? ""}
              name="moTa"
              onChange={handleChangeInput}
              multiline
              minRows={4}
            />
            <FormControl sx={styles.inputFile}>
              <input
                type="file"
                accept="image/*"
                onChange={handleChangeImage}
              />
              <Box sx={{ width: 150, height: 150 }}>
                {courseDetail.hinhAnh && (
                  <img
                    src=""
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                )}
              </Box>
            </FormControl>
          </Box>
          <Button variant="contained" sx={styles.button}>
            {action === "add" ? "Thêm" : "Lưu"}
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}
