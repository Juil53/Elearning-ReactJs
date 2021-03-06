import * as ActionType from "./constants";
import api from "../../../../../Api/api";

// action fetch user Selector
export const actFetchUserSelector = (codeCourse) => {
  return (dispatch) => {
    dispatch(actUserSelectorRequest());
    api
      .post("QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh", codeCourse)
      .then((result) => {
        dispatch(actUserSelectorSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actUserSelectorFailed(error));
      });
  };
};
const actUserSelectorRequest = () => {
  return {
    type: ActionType.USER_SELECTOR_REQUEST,
  };
};
const actUserSelectorSuccess = (data) => {
  return {
    type: ActionType.USER_SELECTOR_SUCCESS,
    payload: data,
  };
};
const actUserSelectorFailed = (error) => {
  return {
    type: ActionType.USER_SELECTOR_FAILED,
    payload: error,
  };
};

// action fetch list user waiting
export const actFetchUserWaiting = (codeCourse) => {
  return (dispatch) => {
    dispatch(actUserWaitingRequest());
    api
      .post("QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet", codeCourse)
      .then((result) => {
        dispatch(actUserWaitingSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actUserWaitingFailed(error));
      });
  };
};
const actUserWaitingRequest = () => {
  return {
    type: ActionType.USER_WAITING_REQUEST,
  };
};
const actUserWaitingSuccess = (data) => {
  return {
    type: ActionType.USER_WAITING_SUCCESS,
    payload: data,
  };
};
const actUserWaitingFailed = (error) => {
  return {
    type: ActionType.USER_WAITING_FAILED,
    payload: error,
  };
};


// action fetch list user Joined
export const actFetchUserJoined = (codeCourse) => {
  return (dispatch) => {
    dispatch(actUserJoinedRequest());
    api
      .post("QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc", codeCourse)
      .then((result) => {
        dispatch(actUserJoinedSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actUserJoinedFailed(error));
      });
  };
};
const actUserJoinedRequest = () => {
  return {
    type: ActionType.USER_JOINED_REQUEST,
  };
};
const actUserJoinedSuccess = (data) => {
  return {
    type: ActionType.USER_JOINED_SUCCESS,
    payload: data,
  };
};
const actUserJoinedFailed = (error) => {
  return {
    type: ActionType.USER_JOINED_FAILED,
    payload: error,
  };
};

// get code course
export const actGetCodeCourse = (courseCode) => {
  return {
    type: ActionType.GET_CODECOURSE,
    payload: courseCode,
  };
};


// action register course
export const actAdminRegisterCourse = (courseInfo) => {
  return (dispatch) => {
    dispatch(actAdminRegisterCourseRequest());
    api
      .post("QuanLyKhoaHoc/GhiDanhKhoaHoc", courseInfo)
      .then((result) => {
        dispatch(actAdminRegisterCourseSuccess(result.data));
        alert('X??c nh???n th??nh c??ng!')       
      })
      .catch((error) => {
        dispatch(actAdminRegisterCourseFailed(error));
        console.log(error);
      });
  };
};
const actAdminRegisterCourseRequest = () => {
  return {
    type: ActionType.ADMIN_REGISTER_COURSE_REQUEST,
  };
};
const actAdminRegisterCourseSuccess = (data) => {
  return {
    type: ActionType.ADMIN_REGISTER_COURSE_SUCCESS,
    payload: data,
  };
};
const actAdminRegisterCourseFailed = (error) => {
  return {
    type: ActionType.ADMIN_REGISTER_COURSE_FAILED,
    payload: error,
  };
};