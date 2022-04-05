import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { withRouter } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
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
      text: "User",
      icon: <AccountCircleIcon />,
      onClick: () => history.push("/adminusers"),
    },
    {
      text: "Courses",
      icon: <LibraryBooksIcon />,
      onClick: () => history.push("/admin-course"),
    },
  ];
  const handleCheckout = () => {
    localStorage.removeItem("AdminClient");
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <LogoutIcon sx={{}} />
      </div>

      <Drawer variant="permanent">
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
