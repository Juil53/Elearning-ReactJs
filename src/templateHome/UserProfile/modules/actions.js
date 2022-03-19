import * as ActionType from "./constants";
import api from "../../../Api/api";

export const actUserProfile = (taiKhoan) => {
  return (dispatch) => {
    dispatch(actUserProfileRequest());
    api
      .post("QuanLyNguoiDung/ThongTinTaiKhoan", taiKhoan)
      .then((result) => {
        dispatch(actUserProfileSuccess(result.data));
        localStorage.setItem("userInfo", JSON.stringify(result.data))
      })
      .catch((error) => {
        dispatch(actUserProfileFailed(error));
      });
  };
};

const actUserProfileRequest = () => {
  return {
    type: ActionType.USER_PROFILE_REQUEST,
  };
};

const actUserProfileSuccess = (data) => {
  return {
    type: ActionType.USER_PROFILE_SUCCESS,
    payload: data,
  };
};

const actUserProfileFailed = (error) => {
  return {
    type: ActionType.USER_PROFILE_FAILED,
    payload: error,
  };
};
