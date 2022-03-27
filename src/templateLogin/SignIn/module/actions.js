import * as ActionType from "./constant";
import api from "./../../../Api/api";

export const actSignIn = (account, history) => {
  return (dispatch) => {
    dispatch(actSignInRequest());
    api
      .post("QuanLyNguoiDung/DangNhap", account)
      .then((result) => {
        if (result.data.maLoaiNguoiDung === "GV") {
          return (
            dispatch(actSignInSuccess(result.data)),
            localStorage.setItem("AdminClient", JSON.stringify(result.data)),
            setTimeout(() => {
              history.replace("/dashboard");
            }, 1000)
          );
        }
        dispatch(actSignInSuccess(result.data));
        localStorage.setItem("UserClient", JSON.stringify(result.data));
        setTimeout(() => {
          history.replace("/");
        }, 1000);
      })
      .catch((error) => {
        dispatch(actSignInFailed(error));
      });
  };
};

const actSignInRequest = () => {
  return {
    type: ActionType.AUTHSIGNIN_REQUEST,
  };
};

const actSignInSuccess = (data) => {
  return {
    type: ActionType.AUTHSIGNIN_SUCCESS,
    payload: data,
  };
};

const actSignInFailed = (error) => {
  return {
    type: ActionType.AUTHSIGNIN_FAILED,
    payload: error,
  };
};
