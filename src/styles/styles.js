import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
  palette: {
    primary: {
      main: "#FE79A2",
    },
    secondary: {
      main: "#3f3a64",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          color: "#3f3a64",
          fontSize: "38px",
          lineHeight: "45px",
          fontWeight: "700",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "1.5rem",
        },
        contained: {
          padding: "15px 40px",
          borderRadius: "10px",
          color: "#fff",
        },
        outlined: {
          padding: "15px 40px",
          borderRadius: "10px",
          border: "1px solid #fff",
          color: "#fff",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "all 400ms ease",
          boxShadow: "none",
          padding: "1rem",
          borderRadius: "2rem",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        img: {
          borderRadius: "2rem",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          overflow: "hidden",
          borderRadius: "2rem",
          boxShadow: "none",
          transition: "all 400ms ease",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: "0 0 5rem 5rem",
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        },
      },
    },
  },
});

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginTop: "50px",
  },
  Loading: {
    position: "fixed",
    left: "50%",
    top: "35%",
    zIndex: 1000,
  },
  //Navbar
  colorDefault: {
    color: "#fff",
  },
  colorChange: {
    color: "#3f3a64",
  },
  //Layout Login
  sliderLogin: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "url(./img/banner1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    padding: "20% 0 10% 0",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      background: "linear-gradient(148.25deg, #A253D8 3%, #1545CB 89.85%)",
      opacity: 0.7,
    },
  },

  // Slider
  slider: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "url(./img/banner1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      background: "linear-gradient(148.25deg, #A253D8 3%, #1545CB 89.85%)",
      opacity: 0.7,
    },
  },
  sliderTitle: {
    textAlign: "center",
    zIndex: 1,
    color: "#fff",
    fontSize: "40px",
  },
  sliderText: {
    textAlign: "center",
    zIndex: 1,
    color: "#fff",
  },

  // FeatureCourses
  featuredbg: {
    backgroundColor: "#e7cdef36",
    padding: "50px 0",
  },
  featuredTeacher: {
    padding: "0 10px",
    fontSize: "20px",
    opacity: 0.7,
  },

  // Facilities
  facilitiesbg: {
    background: "#f8ddebb8",
    padding: "100px 0",
  },
  facilitiesTxt: {
    color: "gray",
    opacity: 0.7,
  },
  facilitiesPaper: {
    padding: "1rem 1rem 1.5rem 1rem",
    height: "250px",
    border: "1px solid transparent",
    transform: "translateY(0)",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      borderColor: "#FE79A2",
      transform: "translateY(-5px)",
    },
  },

  //Card
  cards: {
    border: "1px solid transparent",
    borderColor: "transparent",
    background: "#fff",
    transform: "translateY(0)",
    "&:hover": {
      borderColor: "#FE79A2",
      background: "transparent",
      transform: "translateY(-5px)",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  },

  //News
  newBg: {
    backgroundColor: "#e7cdef36",
    padding: "50px 0",
  },
  layer: {
    display: "flex",
    alignItems: "flex-end",
    position: "relative",
    width: "100%",
    height: "600px",
    background: "url(./img/banner2.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center left",
    backgroundRepeat: "no-repeat",
    transition: "all .5s",
    borderRadius: "10px",
    overflow: "hidden",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      background: "#000",
      opacity: 0.6,
      zIndex: 1,
    },
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  layer1: {
    display: "flex",
    alignItems: "flex-end",
    position: "relative",
    width: "100%",
    height: "300px",
    background: "url(./img/banner3.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center left",
    backgroundRepeat: "no-repeat",
    transition: "all .5s",
    borderRadius: "10px",
    overflow: "hidden",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      background: "#000",
      opacity: 0.6,
      zIndex: 1,
    },
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  layer2: {
    display: "flex",
    alignItems: "flex-end",
    position: "relative",
    width: "100%",
    height: "283px",
    background: "url(./img/banner4.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center left",
    backgroundRepeat: "no-repeat",
    transition: "all .5s",
    borderRadius: "10px",
    overflow: "hidden",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      background: "#000",
      opacity: 0.6,
      zIndex: 1,
    },
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  content: {
    position: "relative",
  },
  contentTxt: {
    position: "absolute",
    color: "#fff",
    zIndex: 1,
  },
  contentTeacher: {
    position: "absolute",
    color: "#fff",
    zIndex: 1,
  },

  // Learning
  learning: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    minHeight: "500px",
    background: "url(./img/banner2.jpg)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "top top",
    backgroundRepeat: "no-repeat",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "500px",
      background: "linear-gradient(148.25deg, #A253D8 3%, #1545CB 89.85%)",
      opacity: 0.7,
    },
  },

  //Teacher
  teacherbg: {
    padding: "50px 0",
  },
  teacherImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: "20px",
  },

  //Testimonial
  testBg: {
    background: "#e7cdef36",
    padding: "100px 0",
  },
  testPaper: {
    textAlign: "center",
    width: "300px",
    height: "auto",
    padding: "20px",
    marginBottom: "30px",
  },
  testImg: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
  },
  quote: {
    fontSize: "18px",
    lineHeight: "28px",
    opacity: 0.8,
    "&::before": {
      fontSize: "50px",
      color: "#FE79A2",
      lineHeight: 0.8,
      paddingTop: "8px",
      fontWeight: 600,
      display: "inline-block",
      fontFamily: "Merriweather",
    },
  },
  slickWrapper: {
    textAlign: "-webkit-center",
  },

  //Brand
  brandImg: {
    width: "100%",
    opacity: 0.5,
    transition: "all 400ms ease",
    "&:hover": {
      opacity: 1,
    },
  },

  //Footer
  footerBg: {
    backgroundColor: "#26243c",
    padding: "80px 0",
  },
  footerTxt: {
    "& p": {
      color: "#97a1a9",
      fontSize: "18px",
      lineHeight: "28px",
      padding: "8px 0",
    },
    "& h4": {
      color: "#Fff",
    },
  },
  footerIcon: {
    padding: "0 5px",
    color: "#fff",
    fontSize: "35px",
  },
});

export { theme, useStyles };
