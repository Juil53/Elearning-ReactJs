import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { routesHome } from "../../../Routes/route";
import "./../../../App.css";
import { useStyles } from "./../../../styles/styles";

const Navbar = () => {
  const classes = useStyles();
  const style = {
    navbar: {
      backgroundColor: "transparent",
      transition: "all .2s",
      height: "100px",
    },
    changeColor: {
      backgroundColor: "white",
      transition: "all .2s",
      height: "90px",
    },
    btnColorDefault: {
      color: "#fff",
      opacity: ".7",
      transition: "all .2s",
      "&:hover": {
        opacity: "1",
      },
    },
    btnColorChange: {
      color: "#3f3a64",
      transition: "all .2s",
      "&:hover": {
        color: "#FE79A2",
      },
    },
  };

  //change Navbar color
  const [colorChange, setColorChange] = React.useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);


  const checkSignIn = () => {
    if (localStorage.getItem("UserClient") === null) {
      return (
        <Button href="/signin" sx={{ display: { xs: "none", lg: "flex" } }}>
          <Typography
            variant="p"
            sx={[
              { fontSize: "20px" },
              colorChange ? style.btnColorChange : style.btnColorDefault,
            ]}
          >
            Đăng nhập
          </Typography>
        </Button>
      )
    } else {
      return (
        <>
          <Button href="/user-profiles">
            <PersonIcon
              sx={[
                { fontSize: "30px", flexGrow: 1, display: { xs: "none", lg: "flex" } },
                colorChange ? style.btnColorChange : style.btnColorDefault,
              ]}
            />
          </Button>
          <Button href="/" onClick={() => {
            localStorage.removeItem("UserClient")
          }}>
            <LogoutIcon sx={[
              {
                fontSize: "30px",
                justifyContent: "flex-end",
                display: { xs: "none", lg: "flex" }
              },
              colorChange ? style.btnColorChange : style.btnColorDefault,
            ]} />
          </Button>
        </>
      )
    }
  }
  const checkMenu = () => {
    if (localStorage.getItem("UserClient") === null) {
      return (
        <Button href="/signin">
          Đăng nhập
        </Button>
      )
    } else {
      return (
        <>
          <Box>
            <Button href="/user-profiles">
              <PersonIcon
                sx={{ fontSize: "30px", color: '#3f3a64' }}
              />
            </Button>
            <br />
            <Button href="/" onClick={() => {
              localStorage.removeItem("UserClient")
            }}>
              <LogoutIcon sx={[
                {
                  fontSize: "30px",
                  color: '#3f3a64'
                },
              ]} />
            </Button>
          </Box>
        </>
      )
    }
  }

  // HandleMenuIcon
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar
      position="fixed"
      sx={[{ boxShadow: 0, borderBottom: '1px solid #e7e7e72e' }, colorChange ? style.changeColor : style.navbar]}
    >
      <Container maxWidth="xl" sx={{ my: 2 }}>
        <Toolbar disableGutters>
          <DiamondOutlinedIcon
            sx={{ fontSize: "50px", paddingRight: "5px" }}
            color="primary"
          />
          <Typography
            variant="h4"
            component="div"
            noWrap
            sx={{
              mr: 2,
              flexGrow: { xs: 1, lg: 0 },
              display: { xs: "flex" },
              flexDirection: "column",
            }}
            className={colorChange ? classes.colorChange : classes.colorDefault}
          >
            Study Course
            <Typography variant="body2">Journey to success</Typography>
          </Typography>

          {/* Page */}
          <Box
            sx={{
              mx: 2,
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", lg: "flex" },
            }}
          >
            {routesHome.slice(0, 4).map((page, index) => (
              <Button
                key={index}
                href={page.path}
                sx={[
                  { fontSize: "20px" },
                  colorChange ? style.btnColorChange : style.btnColorDefault,
                ]}
              >
                {page.page}
              </Button>
            ))}
          </Box>

          {/* Search */}
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: { xs: "flex", lg: "flex" },
            }}
          >
            <SearchIcon
              sx={[
                { fontSize: "30px", display: { xs: "none", lg: "flex" } },
                colorChange ? style.btnColorChange : style.btnColorDefault,
              ]}
            />
          </Box>

          {/* SignIn */}
          <Box>
            {checkSignIn()}
          </Box>

          {/* DarkIcon */}
          <DarkModeOutlinedIcon
            sx={[
              {
                fontSize: "30px",
                justifyContent: "flex-end",
                display: { xs: "flex" },
              },
              colorChange ? style.btnColorChange : style.btnColorDefault,
            ]}
          />

          {/* Menu */}
          <Box
            sx={{
              justifyContent: "flex-end",
              display: { xs: "flex", lg: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon
                sx={{
                  fontSize: "40px",
                  bgcolor: "primary.main",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorReference="anchorEl"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {routesHome.slice(0, 4).map((page, index) => (
                <MenuItem onClick={handleClose} key={index}>
                  <Button
                    href={page.path}
                    sx={{ color: '#3f3a64' }}
                  >
                    {page.page}
                  </Button>
                </MenuItem>
              ))}
              <MenuItem>
                {checkMenu()}
              </MenuItem>
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
