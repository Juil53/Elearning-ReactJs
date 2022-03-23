import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { actSignIn } from "./module/actions";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn(props) {
  const err = useSelector((state) => state.signinReducer.error);
  const dispatch = useDispatch();
  const [account, setAccount] = React.useState({
    taiKhoan: "",
    matKhau: "",
  });

  //handle Open Close Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actSignIn(account, props.history));
  };

  const handleAlert = () => {
    return (
      <Modal open={open} aria-describedby="modal-modal-description">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: "2rem",
              bgcolor: "#fff",
              borderRadius: "20px",
              textAlign: "center",
              padding: "2rem",
            }}
          >
            {err.response.data}
            <br />
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </Typography>
        </Box>
      </Modal>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          backgroundColor: "#fff",
          zIndex: 10,
          opacity: "0.9",
          borderRadius: "20px",
          margin: "10rem 3rem",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="taikhoan"
              label="Tai Khoan"
              name="taiKhoan"
              autoFocus
              onChange={handleOnChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="matKhau"
              label="Mat Khau"
              type="password"
              id="matkhau"
              autoComplete="current-password"
              onChange={handleOnChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ghi nhớ"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleOpen}
            >
              Đăng nhập
            </Button>

            {err && handleAlert()}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Quên mật khẩu?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Bạn không có tài khoản? Đăng ký"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
