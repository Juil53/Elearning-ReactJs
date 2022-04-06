import * as React from "react";
import * as ActionType from "./modules/constant";
import "./AdminUsers.css";
import { useSelector, useDispatch } from "react-redux";
import { actAddUser, actUpdateUser } from "./modules/actions";
import { MenuItem, InputLabel, Select, FormControl } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UserModal() {
  const dispatch = useDispatch();

  //handle Open Close Modal
  const open = useSelector((state) => state.adminUserReducer.open);
  const handleOpen = () => dispatch({ type: ActionType.OPENMODAL });
  const handleClose = () => dispatch({ type: ActionType.CLOSEMODAL });

  //get value from Form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  //add User to Reducer
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user !== null) {
      return dispatch(actUpdateUser(state)), handleClose();
    }
    return dispatch(actAddUser(state)), handleClose();
  };

  const [state, setState] = React.useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "",
    maNhom: "",
    email: "",
  });
  // add userInfo to Form
  const user = useSelector((state) => state.adminUserReducer.userInfo);
  React.useEffect(() => {
    if (user) {
      setState({
        taiKhoan: user.taiKhoan,
        matKhau: "",
        hoTen: user.hoTen,
        soDT: user.soDT,
        maLoaiNguoiDung: user.maLoaiNguoiDung,
        maNhom: "GP04",
        email: user.email,
      });
    } else {
      setState({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maLoaiNguoiDung: "",
        maNhom: "",
        email: "",
      });
    }
  }, [user]);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <h1>{user ? "Sửa Người Dùng" : "Thêm Người Dùng"}</h1>
            <div>
              {user ? (
                <TextField
                  required
                  name="taiKhoan"
                  label="Tài Khoản"
                  disabled
                  value={state.taiKhoan}
                  onChange={handleChange}
                />
              ) : (
                <TextField
                  required
                  name="taiKhoan"
                  label="Tài Khoản"
                  value={state.taiKhoan}
                  onChange={handleChange}
                />
              )}

              {user ? (
                <TextField
                  required
                  name="matKhau"
                  label="Mật Khẩu"
                  type="password"
                  value="KhongCoThongTin"
                  disabled
                  onChange={handleChange}
                />
              ) : (
                <TextField
                  required
                  name="matKhau"
                  label="Mật Khẩu"
                  type="password"
                  value={state.matKhau}
                  onChange={handleChange}
                />
              )}

              <TextField
                required
                name="hoTen"
                label="Họ Tên"
                value={state.hoTen}
                onChange={handleChange}
              />
              <TextField
                required
                name="soDT"
                label="Số điện thoại"
                value={state.soDT}
                onChange={handleChange}
              />
              <TextField
                required
                name="email"
                label="Email"
                value={state.email}
                onChange={handleChange}
              />

              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel>Mã loại người dùng</InputLabel>
                <Select
                  defaultValue=""
                  value={state.maLoaiNguoiDung}
                  label="Mã loại người dùng"
                  name="maLoaiNguoiDung"
                  onChange={handleChange}
                >
                  <MenuItem value="GV">Giao Vu</MenuItem>
                  <MenuItem value="HV">Hoc Vien</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel>Mã nhóm</InputLabel>
                <Select
                  label="Mã Nhóm"
                  name="maNhom"
                  defaultValue=""
                  value={state.maNhom}
                  onChange={handleChange}
                >
                  <MenuItem value="GP01">GP01</MenuItem>
                  <MenuItem value="GP02">GP02</MenuItem>
                  <MenuItem value="GP03">GP03</MenuItem>
                  <MenuItem value="GP04">GP04</MenuItem>
                </Select>
              </FormControl>
            </div>
            <button
              type="submit"
              className="btn btn-add"
              style={{ margin: "auto", width: "100%" }}
            >
              {user ? "Sửa" : "Thêm"}
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
