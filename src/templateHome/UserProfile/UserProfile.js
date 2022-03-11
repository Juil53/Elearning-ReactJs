import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import userProfileStyle from "./_components/UserProfileStyle";
import UserInfo from "./_components/UserInfo";
import UserCart from "./_components/UserCart";
import UserCourses from "./_components/UserCourses";

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
        <Box sx={{ mt: 3, display: "block", margin: "auto" }}>
          <Typography>{children}</Typography>
        </Box>
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

export default function UserProfile() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = userProfileStyle();
  return (
    <div className={classes.content}>
      <div className={classes.title}>
        <h2>Trang cá nhân</h2>
        <Stack alignItems="center">
          <Avatar
            alt="User img"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
        </Stack>
        <p>Nguyen Lam</p>
      </div>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
          height: 300,
          mt: 3,
        }}
      >
        <Grid container direction="row"
  justifyContent="space-around">
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
              <Tab sx={{ margin: "auto" }} label="Giỏ hàng" {...a11yProps(1)} />
              <Tab
                sx={{ margin: "auto" }}
                label="Các khóa học"
                {...a11yProps(2)}
              />
            </Tabs>
          </Grid>
          <Grid item xs={12} md={8}>
            <TabPanel value={value} index={0}>
              <UserInfo />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <UserCart />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <UserCourses />
            </TabPanel>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
