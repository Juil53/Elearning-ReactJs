import React from "react";
import "./AdminUsers.css";
import { useStyles } from "../../styles/styles";
import SearchIcon from "@mui/icons-material/Search";
import UserModal from "./UserModal";
import User from "./User";
import { useDispatch } from "react-redux";
import * as ActionType from "./modules/constant";
import { actGetUserInfo } from "./modules/actions";

export default function AdminUsers() {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch({ type: ActionType.OPENMODAL });
  const resetUserEdit = () => dispatch(actGetUserInfo(null));
  const classes = useStyles();
  return (
    <div className={classes.adminContent}>
      <button
        className="btn btn-add"
        onClick={() => {
          resetUserEdit();
          handleOpen();
        }}
      >
        Thêm Người Dùng
      </button>
      <UserModal />
      <div className="search-box">
        <SearchIcon sx={{ marginLeft: "20px" }} />
        <input
          className="admin-search"
          type="text"
          placeholder="Tìm người dùng..."
        />
      </div>
      <User />
    </div>
  );
}
