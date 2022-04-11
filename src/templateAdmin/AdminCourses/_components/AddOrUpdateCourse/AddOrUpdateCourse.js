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
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GROUP_NUMBER } from "../../modules/constants";
import { actCourseAdd } from "../../modules/actions";
import { actCourseCategoryGet } from "../../../../templateHome/Courses/modules/actions";
import { actGetAllUser } from "../../../AdminUsers/modules/actions";
import { useDispatch, useSelector } from "react-redux";

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actCourseCategoryGet());
    dispatch(actGetAllUser());
  }, []);

  const courseCategory = useSelector(
    (state) => state.courseCategoryReducer.dataCourseCategory
  );
  const listUser = useSelector((state) => state.adminUserReducer.listuser);

  const [courseDetail, setCourseDetail] = useState({
    maKhoaHoc: null,
    tenKhoaHoc: null,
    biDanh: null,
    moTa: null,
    luotXem: 0,
    danhGia: 0,
    hinhAnh: null,
    maNhom: GROUP_NUMBER,
    ngayTao: null,
    maDanhMucKhoaHoc: null,
    taiKhoanNguoiTao: null,
  });

  const [imgSrc, setImgSrc] = useState(null);

  let formData = new FormData();
  const [file, setFile] = useState(null);

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    setCourseDetail({
      ...courseDetail,
      [name]: value,
    });
  };

  const handleChangeImage = (e) => {
    let file = e.target.files[0];
    setFile(file);
    setCourseDetail({ ...courseDetail, hinhAnh: file.name });
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      setImgSrc(e.target.result);
    };
  };

  const handleAddCourse = () => {
    formData.append("file", file, file.name);
    formData.append("tenKhoaHoc", courseDetail.tenKhoaHoc);
    dispatch(actCourseAdd(courseDetail, formData));
  };

  const handleUpdateCourse = () => {};

  return (
    <Fragment>
      <Box
        component="main"
        sx={{ width: `calc(100% - ${250}px)`, ml: "250px" }}
      >
        <Box sx={styles.root}>
          <Typography variant="h1">
            {action === "add" ? "Thêm Khóa Học" : "Chỉnh Sửa Khóa Học"}
          </Typography>
          <Box
            component="form"
            sx={{
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
            <TextField
              label="Bí danh"
              type="text"
              value={courseDetail.biDanh ?? ""}
              name="biDanh"
              onChange={handleChangeInput}
            />
            <TextField
              label="Ngày Tạo"
              type="text"
              value={courseDetail.ngayTao ?? ""}
              name="ngayTao"
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
                {courseCategory &&
                  courseCategory?.map((category) => (
                    <MenuItem
                      key={category.maDanhMuc}
                      value={category.maDanhMuc}
                    >
                      {category.tenDanhMuc}
                    </MenuItem>
                  ))}
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
                {listUser &&
                  listUser
                    ?.filter((user) => user.maLoaiNguoiDung === "GV")
                    .map((user) => (
                      <MenuItem key={user.taiKhoan} value={user.taiKhoan}>
                        {user.hoTen}
                      </MenuItem>
                    ))}
              </Select>
            </FormControl>
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
                    src={imgSrc}
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
          <Button
            variant="contained"
            sx={styles.button}
            onClick={action === "add" ? handleAddCourse : handleUpdateCourse}
          >
            {action === "add" ? "Thêm" : "Lưu"}
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}
