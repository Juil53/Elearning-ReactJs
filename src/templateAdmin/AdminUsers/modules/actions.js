import * as ActionType from "./constant";
import api from "../../../Api/api";

// actGetUserPagination
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

// actAddUser
export const actAddUser = (user) => {
  return (dispatch) => {
    dispatch(actAddUserRequest());
    api
      .post("QuanLyNguoiDung/ThemNguoiDung", user)
      .then((result) => {
        dispatch(actAddUserSuccess(result.data));
        console.log(result.data);
        alert("Thêm thành công!");
        // Load lại data sau khi thêm
        dispatch(actGetUser());
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch(actAddUserFailed(error));
      });
  };
};
const actAddUserRequest = () => {
  return {
    type: ActionType.ONSUBMIT_REQUEST,
  };
};
const actAddUserSuccess = (data) => {
  return {
    type: ActionType.ONSUBMIT_SUCCESS,
    payload: data,
  };
};
const actAddUserFailed = (error) => {
  return {
    type: ActionType.ONSUBMIT_FAILED,
    payload: error,
  };
};

// actDeleteUSer
export const actDeleteUser = (taiKhoan) => {
  return (dispatch) => {
    api
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
      .then((result) => {
        alert(result.data);
        dispatch(actGetUser());
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};

// actUserInfo
export const actGetUserInfo = (user) => {
  return {
    type: ActionType.GETUSERINFO_REQUEST,
    payload: user,
  };
};

// actUpdateUser
export const actUpdateUser = (user) => {
  console.log("user", user);
  return (dispatch) => {
    dispatch(actUpdateUserRequest());
    api
      .put(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, user)
      .then((result) => {
        alert("Cap Nhat Thanh Cong");
        console.log("result", result.data);
        dispatch(actUpdateUserSuccess(result.data));
      })
      .catch((err) => {
        console.log("err", err.response);
        dispatch(actUpdateUserFailed(err.response.data));
      });
  };
};
const actUpdateUserRequest = () => {
  return {
    type: ActionType.ONSUBMIT_REQUEST,
  };
};
const actUpdateUserSuccess = (data) => {
  return {
    type: ActionType.ONSUBMIT_SUCCESS,
    payload: data,
  };
};
const actUpdateUserFailed = (error) => {
  return {
    type: ActionType.ONSUBMIT_FAILED,
    payload: error,
  };
};

// actGetKeyword
export const actGetKeyword = (keyword) => {
  return {
    type: ActionType.GETKEYWORD,
    payload: keyword,
  };
};
