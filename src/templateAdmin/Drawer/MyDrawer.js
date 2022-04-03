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
  const itemList = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      onClick: () => history.push("/dashboard"),
    },
    {
      text: "Quản lý người dùng",
      icon: <AccountCircleIcon />,
      onClick: () => history.push("/adminusers"),
    },
    {
      text: "Quản lý khoá học",
      icon: <LibraryBooksIcon />,
      onClick: () => history.push("/admincourses"),
    },
    {
      text: "Registers",
      icon: <AppRegistrationIcon />,
      onClick: () => history.push("/adminregisters"),
    }
  ];
  const handleCheckout = () => {
    localStorage.removeItem("AdminClient");
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* Icon */}
      <div className={classes.icon}>
        <LogoutIcon sx={{}} />
      </div>

      {/* SideMenu */}
      <Drawer variant="permanent" className={classes.drawer}>
        <Toolbar>
          <h3>Elearning</h3>
        </Toolbar>
        <Divider/>
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
