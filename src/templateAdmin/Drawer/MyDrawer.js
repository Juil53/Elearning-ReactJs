import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { withRouter } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import HomeIcon from "@mui/icons-material/Home";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    backgroundColor: "#3f3a64",
  },
  icon: {
    padding: "1rem",
    color: "#fff",
  },
  drawer: {
    width: "200px",
  },
});

function MyDrawer(props) {
  const { history } = props;
  const hoTen = JSON.parse(localStorage.getItem("AdminClient")).hoTen;
  const itemList = [
    {
      text: `Hi! ${hoTen}`,
      icon: <SentimentVerySatisfiedIcon color="primary" />,
    },
    {
      text: "Trang chủ",
      icon: <HomeIcon color="primary" />,
      onClick: () => history.push("/"),
    },
    {
      text: "Dashboard",
      icon: <DashboardIcon color="primary" />,
      onClick: () => history.push("/dashboard"),
    },
    {
      text: "Quản lý người dùng",
      icon: <AccountCircleIcon color="primary" />,
      onClick: () => history.push("/adminusers"),
    },
    {
      text: "Quản lý khoá học",
      icon: <LibraryBooksIcon color="primary"/>,
      onClick: () => history.push("/admin-course"),
    },
    {
      text: "Registers",
      icon: <AppRegistrationIcon color="primary"/>,
      onClick: () => history.push("/adminregisters"),
    },
    {
      text: "Đăng xuất",
      icon: <LogoutIcon color="primary" />,
      onClick: () => {
        handleCheckout();
      },
    },
  ];

  const handleCheckout = () => {
    localStorage.removeItem("AdminClient");
    history.replace("/");
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* SideMenu */}
      <Drawer variant="permanent" className={classes.drawer}>
        <Toolbar>
          <h1>Elearning</h1>
        </Toolbar>
        <Divider />
        <List>
          {itemList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}
export default withRouter(MyDrawer);
