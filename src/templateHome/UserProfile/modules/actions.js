import * as ActionType from "./constants";
import api from "../../../Api/api";

// info user and list course
export const actUserProfile = (account) => {
  return (dispatch) => {
    dispatch(actUserProfileRequest());
    api
      .post("QuanLyNguoiDung/ThongTinTaiKhoan", account)
      .then((result) => {
        dispatch(actUserProfileSuccess(result.data));
        //localStorage.setItem("user", JSON.stringify(result.data));
        console.log(result.data)
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

// Cancel course
export const actCancelCourse = (courseInfo) => {
  return (dispatch) => {
    dispatch(actCancelCourseRequest());
    api
      .post("QuanLyKhoaHoc/HuyGhiDanh", courseInfo)
      .then((result) => {
        dispatch(actCancelCourseSuccess(result.data));
        console.log(result.data);
      })
      .catch((error) => {
        dispatch(actCancelCourseFailed(error));
      });
  };
};
const actCancelCourseRequest = () => {
  return {
    type: ActionType.CANCEL_COURSE_REQUEST,
  };
};
const actCancelCourseSuccess = (data) => {
  return {
    type: ActionType.CANCEL_COURSE_SUCCESS,
    payload: data,
  };
};
const actCancelCourseFailed = (error) => {
  return {
    type: ActionType.CANCEL_COURSE_FAILED,
    payload: error,
  };
};

// get Keyword
export const actGetKeyword =(keyword)=>{
  return {
    type: ActionType.GET_KEYWORD,
    payload:keyword,
  }
}