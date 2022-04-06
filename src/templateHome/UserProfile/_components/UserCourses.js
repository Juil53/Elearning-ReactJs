import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import userProfileStyle from "./UserProfileStyle";
import { actCancelCourse } from "../modules/actions";

export default function UserCourses(props) {
  const { user } = props;
  const classes = userProfileStyle();

  const dispatch = useDispatch();
  //Modal Cancel course
  const [showCancelSuccess, setShowCancelSuccess] = useState(false);
  // get keywork search
  let keyword = useSelector((state) => state.userProfileReducer.keyword);
  const courseList = user?.chiTietKhoaHocGhiDanh.filter(
    (course) =>
      course.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
  );

  // render couser list
  const renderCourses = () => {
    return courseList?.map((course, index) => {
      const courseInfo = {
        maKhoaHoc: course.maKhoaHoc,
        taiKhoan: JSON.parse(localStorage.getItem("UserClient")).taiKhoan,
      };
      return (
        <div key={index}>
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
                className="classes.button"
                variant="contained"
                size="small"
                onClick={() => {
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
          <Modal
            open={showCancelSuccess}
            onClose={setShowCancelSuccess(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ overflow: "scroll" }}
          >
            <Box>HỦY KHÓA HỌC THÀNH CÔNG!</Box>
          </Modal>
        </div>
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
