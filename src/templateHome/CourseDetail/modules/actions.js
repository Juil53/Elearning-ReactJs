import * as ActionType from './constants';
import api from '../../../Api/api';

export const actCourseDetailGet = (maKhoaHoc) => {
    return (dispatch) => {
        dispatch(actCourseRequest());

        api
            .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
            .then(result => dispatch(actCourseDetailSuccess(result.data)))
            .catch(error => dispatch(actCourseFailed(error)))
    }
}

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