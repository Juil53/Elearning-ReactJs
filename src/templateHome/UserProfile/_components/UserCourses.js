import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { actCancelCourse } from "../modules/actions";

export default function UserCourses(props) {
  const { user } = props;
  const dispatch = useDispatch();
  //Modal Cancel course
  const [showCancelSuccess, setShowCancelSuccess] = useState(false);

  let keyword = useSelector((state) => state.userProfileReducer.keyword);
  const courseList = user?.chiTietKhoaHocGhiDanh.filter(
    (course) =>
      course.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
  );

  const renderCourses = () => {
    return courseList?.map((course, index) => {
      const courseInfo = {
        maKhoaHoc: course.maKhoaHoc,
        taiKhoan: JSON.parse(localStorage.getItem("UserClient")).taiKhoan,
      };
      return (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="wordpress" src={course.hinhAnh} />
            </ListItemAvatar>
            <ListItemText
              primary={course.tenKhoaHoc}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {course.moTa}
                  </Typography>

                  {" — Master with this Complete Course…"}
                </React.Fragment>
              }
            />
            <Box sx={{ "& button": { m: 1 } }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  //handleCancelCourse(courseInfo);
                  dispatch(actCancelCourse(courseInfo));
                  setShowCancelSuccess(true);
                }}
              >
                Hủy
              </Button>
            </Box>
          </ListItem>
          <Divider variant="inset" component="li" />
          {/* Modal cancel course */}
          {/* <Modal
            show={showCancelSuccess}
            onHide={() => setShowCancelSuccess(false)}
            animation={false}
          >
            <Modal.Header>
              <Button
                variant="secondary"
                onClick={() => setShowCancelSuccess(false)}
                style={{ diplay: "inherit", alignSelf: "center" }}
              >
                <IoCloseSharp size={20} />
              </Button>
            </Modal.Header>
            <Modal.Body>
              <div class="alert alert-success mt-2">
                <strong>HỦY KHÓA HỌC THÀNH CÔNG!</strong>
              </div>
            </Modal.Body>
          </Modal> */}
        </>
      );
    });
  };

  return (
    <List
      sx={{
        width: "80%",
        maxWidth: "90%",
        bgcolor: "background.paper",
        marginTop: 1,
      }}
    >
      {renderCourses()}
    </List>
  );
}
