import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { useStyles } from "../../styles/styles";
import { actGetUser } from "./modules/actions";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./AdminUsers.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "taiKhoan", headerName: "Tài Khoản", width: 130 },
  { field: "hoTen", headerName: "Họ Tên", width: 230 },
  { field: "soDT", headerName: "Số Điện Thoại", width: 130, type: "number" },
  { field: "email", headerName: "Email", width: 300 },
  { field: "tenLoaiNguoiDung", headerName: "Tên Loại Người Dùng", width: 300 },
  {
    field: "thaoTac",
    headerName: "Thao Tác",
    width: "100%",
    renderCell: (params) => (
      <div className="btnStack">
        <button className="btn btn-delete">Xoá</button>
        <button className="btn btn-edit">Sửa</button>
      </div>
    ),
  },
];

export default function AdminUsers() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Call Api get User
  useEffect(() => {
    dispatch(actGetUser());
  }, []);
  // Get data từ Reducer
  const data = useSelector((state) => state.adminUserReducer.listuser);
  // Thêm Id vào data
  const users = data?.items.map((user, index) => {
    return (user = {
      ...user,
      id: index + 1,
      thaoTac: <Button>Delete</Button>,
    });
  });
  // Chạy hàm renderTable khi có data
  const renderTable = () => {
    if (users) {
      return (
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      );
    }
  };

  return (
    <div className={classes.adminContent}>
      <button className="btn btn-add">Thêm thành viên</button>
      <div className="search-box">
        <SearchIcon sx={{marginLeft:'20px'}}/>
        <input
          className="admin-search"
          type="text"
          placeholder="Tìm người dùng..."
        />
      </div>
      <div style={{ height: "80vh", width: "100%" }}>{renderTable()}</div>
    </div>
  );
}
