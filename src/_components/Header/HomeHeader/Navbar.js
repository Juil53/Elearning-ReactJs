import * as React from "react";
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

const pages = ["Home", "About", "Courses", "Pages", "Contact"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color="transparent">
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
              color: "#fff",
            }}
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
                sx={{
                  fontSize: "20px",
                  color: "#fff",
                }}
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
            <SearchIcon sx={{ fontSize: "30px", color: "white" }} />
            <Button>
              <PersonIcon sx={{ fontSize: "30px", color: "white" }} />
              <Typography variant="p" sx={{ color: "#fff" }}>
                Login
              </Typography>
            </Button>
          </Box>
          <DarkModeOutlinedIcon
            sx={{
              fontSize: "35px",
              color: "white",
              justifyContent: "flex-end",
              display: { xs: "flex" },
            }}
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
