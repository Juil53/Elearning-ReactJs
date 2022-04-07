import * as ActionType from "./constants";
import api from "../../../Api/api";

export const actCourseDetailGet = (maKhoaHoc) => {
  return (dispatch) => {
    dispatch(actCourseRequest());

    api
      .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
      .then((result) => dispatch(actCourseDetailSuccess(result.data)))
      .catch((error) => dispatch(actCourseFailed(error)));
  };
};

export const actCourseAddToCart = (khoaHoc) => {
  return (dispatch) =>
    dispatch({
      type: ActionType.COURSE_ADD_TO_CART,
      payload: khoaHoc,
    });
};

const actCourseRequest = () => {
  return {
    type: ActionType.COURSE_REQUEST,
  };
};
const actCourseDetailSuccess = (data) => {
  return {
    type: ActionType.COURSE_DETAIL_SUCCESS,
    payload: data,
  };
};
const actCourseFailed = (error) => {
  return {
    type: ActionType.COURSE_FAILED,
    payload: error,
  };
};

// action register course
export const actRegisterCourse = (courseInfo) => {
  return (dispatch) => {
    dispatch(actRegisterCourseRequest());
    api
      .post("QuanLyKhoaHoc/DangKyKhoaHoc", courseInfo)
      .then((result) => {
        dispatch(actRegisterCourseSuccess(result.data));
        console.log(result.data);
      })
      .catch((error) => {
        dispatch(actRegisterCourseFailed(error));
        console.log(error);
      });
  };
};

const actRegisterCourseRequest = () => {
  return {
    type: ActionType.REGISTER_COURSE_REQUEST,
  };
};
const actRegisterCourseSuccess = (data) => {
  return {
    type: ActionType.REGISTER_COURSE_SUCCESS,
    payload: data,
  };
};
const actRegisterCourseFailed = (error) => {
  return {
    type: ActionType.REGISTER_COURSE_FAILED,
    payload: error,
  };
};
