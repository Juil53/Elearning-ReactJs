import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
const theme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: "right",
        },
      },
    },
  },
});
const registerCourseStyle = makeStyles({
  pagination: {
    textAlign: "right",
    marginTop: 15,
  },
  title: {
    "& h2": {
      marginBottom: 10,
    },
  },
  modalRegister: {
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '65%',
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    padding: 40
  },
});

export { theme, registerCourseStyle };
