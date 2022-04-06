import * as ActionType from "./constant";
import api from "../../../Api/api";

export const actGetUser = () => {
  return (dispatch) => {
    dispatch(actGetUserRequest());
    api
      .get(
        "QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP04&page=1&pageSize=100"
      )
      .then((result) => {
        dispatch(actGetUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetUserFailed(err));
      });
  };
};

export const actGetAllUser = () => {
  return (dispatch) => {
    dispatch(actGetUserRequest());

    api
      .get(
        "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
      )
      .then((result) => {
        dispatch(actGetUserSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetUserFailed(error));
      });
  };
};

const actGetUserRequest = () => {
  return {
    type: ActionType.USERLIST_REQUEST,
  };
};
const actGetUserSuccess = (data) => {
  return {
    type: ActionType.USERLIST_SUCCESS,
    payload: data,
  };
};
const actGetUserFailed = (err) => {
  return {
    type: ActionType.USERLIST_FAILED,
    payload: err,
  };
};
