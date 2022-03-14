import * as ActionType from "./constant";
import api from "../../../Api/api";

export const actSignUp = (user, history) => {
  return (dispatch) => {
    dispatch(actSignUpRequest());
    api
      .post("QuanLyNguoiDung/DangKy", user)
      .then((result) => {
        dispatch(actSignUpSuccess(result.data));
        history.replace("/");
      })
      .catch((err) => {
        dispatch(actSignUpFailed(err));
      });
  };
};

const actSignUpRequest = () => {
  return {
    type: ActionType.SIGNUP_REQUEST,
  };
};

const actSignUpSuccess = (data) => {
  return {
    type: ActionType.SIGNUP_SUCCESS,
    payload: data,
  };
};

const actSignUpFailed = (err) => {
  return {
    type: ActionType.SIGNUP_FAILED,
    payload: err,
  };
};
