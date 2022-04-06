import React from "react";
import * as ActionType from "./modules/constant";
import "./AdminUsers.css";
import { useStyles } from "../../styles/styles";
import { useDispatch } from "react-redux";
import { actGetUserInfo, actGetKeyword } from "./modules/actions";
import SearchIcon from "@mui/icons-material/Search";
import UserModal from "./UserModal";
import User from "./User";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function AdminUsers() {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch({ type: ActionType.OPENMODAL });
  const resetUserEdit = () => dispatch(actGetUserInfo(null));
  const classes = useStyles();

  //handleOnChange
  const handleOnChange = (event) => {
    const { value } = event.target;
    dispatch(actGetKeyword(value));
  };

  return (
    <div className={classes.adminContent}>
      <Button
        color="success"
        variant="outlined"
        // className="btn btn-add"
        onClick={() => {
          resetUserEdit();
          handleOpen();
        }}
      >
        <AddBoxIcon fontSize="large" />
        Thêm Người Dùng
      </Button>
      <UserModal />
      <div className="search-box">
        <SearchIcon sx={{ marginLeft: "20px" }} />
        <input
          className="admin-search"
          type="text"
          placeholder="Tìm người dùng..."
          onChange={handleOnChange}
        />
      </div>
      <User />
    </div>
  );
}
