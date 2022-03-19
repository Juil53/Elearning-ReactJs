import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { actSignUp } from "./module/action";
import { signupUserSchema } from "../../Validation/UserValidation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Loading from "../../_components/Loading/Loading";
const theme = createTheme();

export default function SignUp(props) {
  const err = useSelector((state) => state.signupReducer.error);
  const loading = useSelector((state) => state.signupReducer.loading);
  const dispatch = useDispatch();
  const handleOnSubmit = (value, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
      dispatch(actSignUp(value, props.history));
    }, 1000);
  };

  //handle Open Close Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Modal Alert
  const handleAlert = () => {
    if (err) {
      return err.response.data;
    }
    return "Success!"
  };

  //Modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 20,
    p: 4,
    textAlign: "center",
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="md"
        sx={{
          backgroundColor: "#fff",
          zIndex: 10,
          borderRadius: "20px",
          margin: "5rem 0",
          paddingBottom: "3rem",
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
            Đăng Ký
          </Typography>

          {/* Validation formik */}
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              email: "",
              hoTen: "",
              soDT: "",
              maNhom: "",
            }}
            onSubmit={handleOnSubmit}
            validationSchema={signupUserSchema}
          >
            {(props) => (
              <Form>
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        id="taikhoan"
                        label="Tài khoản"
                        name="taiKhoan"
                        helperText={<ErrorMessage name="taiKhoan" />}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="matKhau"
                        label="Mật Khẩu"
                        type="password"
                        id="matkhau"
                        helperText={<ErrorMessage name="matKhau" />}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        helperText={<ErrorMessage name="email" />}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        id="hoten"
                        label="Họ tên"
                        name="hoTen"
                        autoComplete="hoten"
                        helperText={<ErrorMessage name="hoTen" />}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        id="sdt"
                        label="Số điện thoại"
                        name="soDT"
                        autoComplete="sdt"
                        helperText={<ErrorMessage name="soDT" />}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        id="manhom"
                        label="Mã Nhóm"
                        name="maNhom"
                        helperText={<ErrorMessage name="maNhom" />}
                      />
                    </Grid>
                  </Grid>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      disabled={props.isSubmitting}
                      onClick={handleOpen}
                    >
                      {props.isSubmitting ? "Đang tải" : "Đăng Ký"}
                    </Button>
                  </div>

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Thông báo!
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {handleAlert()}
                      </Typography>
                    </Box>
                  </Modal>

                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/signin" variant="body2">
                        Bạn đã có tài khoản? Đăng nhập
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
