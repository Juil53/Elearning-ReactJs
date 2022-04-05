import * as ActionType from "./constants";
import api from "../../../Api/api";

export const actCourseAllGet = () => {
  return (dispatch) => {
    dispatch(actCourseRequest());

    api
      .get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${ActionType.GROUP_NUMBER}`)
      .then((result) => {
        dispatch(actCourseListSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actCourseFailed(error));
      });
  };
};

export const actCourseSearch = (tenKhoaHoc) => {
  return (dispatch) => {
    dispatch(actCourseRequest());

    api
      .get(
        `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${ActionType.GROUP_NUMBER}`
      )
      .then((result) => {
        dispatch(actCourseListSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actCourseFailed(error));
      });
  };
};

export const actCourseDelete = (maKhoaHoc) => {
  return (dispatch) => {
    console.log("delete course", maKhoaHoc);
    dispatch(actCourseRequest());

    api
      .delete(
        `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`
      )
      .then((result) => {
        actCourseAllGet();
      })
      .catch((error) => {
        dispatch(actCourseFailed(error));
      });
  };
};

const actCourseRequest = () => {
  return {
    type: ActionType.COURSE_REQUEST,
  };
};

const actCourseListSuccess = (data) => {
  return {
    type: ActionType.COURSE_LIST_SUCCESS,
    payload: data,
  };
};

const actCourseFailed = (error) => {
  return {
    type: ActionType.COURSE_FAILED,
    payload: error,
  };
};
