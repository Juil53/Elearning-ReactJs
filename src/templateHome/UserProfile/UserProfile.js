import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import userProfileStyle from "./_components/UserProfileStyle";
import UserInfo from "./_components/UserInfo";
import UserCourses from "./_components/UserCourses";
import { actUserProfile } from "./modules/actions";
import Breadcrumb from "../../_components/Breadcrumb/Breadcrumb";
import SearchCourse from "./_components/SearchCourse";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ mt: 3, display: "block", margin: "auto" }}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function UserProfile(props) {
  const {id} = props.match.params;
  const [value, setValue] = React.useState(Number(id));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const breadcrumb = [
    {
        label: 'Trang Chủ',
        path: '/'
    },
    {
        label: 'Trang cá nhân',
    }
]
  const classes = userProfileStyle();
  const dispatch = useDispatch();
  useEffect(() => {
    const accountUser={
      taiKhoan: JSON.parse(localStorage.getItem("UserClient")).taiKhoan,
    }
    dispatch(actUserProfile((accountUser)));
  },[]);
  const user = useSelector(state=>state.userProfileReducer.dataUser);
  let keyword = useSelector(state=>state.userProfileReducer.keyword)
  const courseList=user?.chiTietKhoaHocGhiDanh.filter((course)=>course.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase())!==-1)

  const renderCourses=()=>{
    return courseList?.map((course,index)=>{
      return <UserCourses course={course} key={index}/>
    })
  }

  return !(localStorage.getItem("UserClient")) ? (
    <Redirect to="/" />
  ) : (
    <>
    <Breadcrumb breadCrumbArr = {breadcrumb}/>
    <div className={classes.content}>
      <div className={classes.title}>
        <h2>{user && user.hoTen}</h2>
      </div>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
          height: '100%',
          mt: 3,
        }}
      >
        <Grid container direction="row" justifyContent="space-around">
          <Grid item xs={12} md={3}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab
                sx={{ margin: "auto" }}
                label="Thông tin cá nhân"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ margin: "auto" }}
                label="Khóa học của tôi"
                {...a11yProps(1)}
              />
            </Tabs>
          </Grid>
          <Grid item xs={12} md={8}>
            <TabPanel value={value} index={0}>
              <UserInfo user={user} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SearchCourse />
              {renderCourses()}
            </TabPanel>
          </Grid>
        </Grid>
      </Box>
    </div>
    </>
  );
}

export default UserProfile;
