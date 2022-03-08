import * as React from "react";
import "./../../../App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useStyles } from "./../../../styles/styles";

const pages = ["Home", "About", "Courses", "Pages", "Contact"];
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
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={[{ boxShadow: 0,borderBottom:'1px solid #e7e7e72e' }, colorChange ? style.changeColor : style.navbar]}
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

          <Box
            sx={{
              mx: 2,
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", lg: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={[
                  { fontSize: "20px" },
                  colorChange ? style.btnColorChange : style.btnColorDefault,
                ]}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: { xs: "none", lg: "flex" },
            }}
          >
            <SearchIcon
              sx={[
                { fontSize: "30px" },
                colorChange ? style.btnColorChange : style.btnColorDefault,
              ]}
            />
            <Button>
              <PersonIcon
                sx={[
                  { fontSize: "30px" },
                  colorChange ? style.btnColorChange : style.btnColorDefault,
                ]}
              />
              <Typography
                variant="p"
                sx={[
                  { fontSize: "20px" },
                  colorChange ? style.btnColorChange : style.btnColorDefault,
                ]}
              >
                Login
              </Typography>
            </Button>
          </Box>
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
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon
                sx={{
                  fontSize: "40px",
                  bgcolor: "primary.main",
                  color: "#fff",
                  borderRadius: "10px",
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
