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
