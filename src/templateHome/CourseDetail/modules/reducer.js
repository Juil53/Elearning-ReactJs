import * as ActionType from './constants';

const initialState = {
    loading: false,
    courseDetailData: null,
    error: null
}

export const courseDetailReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionType.COURSE_REQUEST: {
            const newState = { ...state, loading: true };
            state = newState;
            return { ...state }
        }

        case ActionType.COURSE_DETAIL_SUCCESS: {
            const newState = { ...state, loading: false, courseDetailData: action.payload };
            state = newState;
            return { ...state }
        }

        case ActionType.COURSE_FAILED: {
            const newState = { ...state, loading: false, error: action.payload };
            state = newState;
            return { ...state }
        }
        default:
            return state
    }
}
