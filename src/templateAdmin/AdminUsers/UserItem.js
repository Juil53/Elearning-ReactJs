import React from "react";
import * as ActionType from "./modules/constant";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { actDeleteUser, actGetUserInfo } from "./modules/actions";
import { useDispatch } from "react-redux";

export default function UserItem(props) {
  const { user } = props;
  const dispatch = useDispatch();

  // handle Delete
  const handleDelete = (taiKhoan) => {
    dispatch(actDeleteUser(taiKhoan));
  };

  // handle Edit
  const handleUserInfo = (user) => {
    dispatch(actGetUserInfo(user));
  };
  // Open Close Modal
  const handleOpen = () => dispatch({ type: ActionType.OPENMODAL });

  return (
    <>
      <TableRow>
        <TableCell>{user.id}</TableCell>
        <TableCell align="center">{user.taiKhoan}</TableCell>
        <TableCell align="center">{user.hoTen}</TableCell>
        <TableCell align="center">{user.soDT}</TableCell>
        <TableCell align="center">{user.email}</TableCell>
        <TableCell align="center">{user.tenLoaiNguoiDung}</TableCell>
        <TableCell align="center">
          <button
            className="btn btn-delete"
            onClick={() => {
              // Delete confirm
              if (
                window.confirm("Bạn có muốn xoá tài khoản " + user.taiKhoan)
              ) {
                handleDelete(user.taiKhoan);
              }
            }}
          >
            Xoá
          </button>
          <button
            className="btn btn-edit"
            onClick={() => {
              handleOpen();
              handleUserInfo(user);
            }}
          >
            Sửa
          </button>
        </TableCell>
      </TableRow>
    </>
  );
}
