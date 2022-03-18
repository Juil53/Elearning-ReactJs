import * as ActionType from './constants';

const initialStateCategory = {
    loading: false,
    dataCourseCategory: null,
    error: null,
}

export const courseCategoryReducer = (state = initialStateCategory, action) => {
    switch (action.type) {

        case ActionType.COURSE_REQUEST: {
            const newState = { ...state, loading: true };
            state = newState;
            return { ...state }
        }

        case ActionType.COURSE_CATEGORY_SUCCESS: {
            const newState = { ...state, loading: false, dataCourseCategory: action.payload };
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

const initialStateCourse = {
    loading: false,
    dataCourseList: null,
    error: null
}

export const courseListReducer = (state = initialStateCourse, action) => {
    switch (action.type) {
        case ActionType.COURSE_REQUEST: {
            const newState = { ...state, loading: true };
            state = newState;
            return { ...state }
        }

        case ActionType.COURSE_LIST_SUCCESS: {
            const newState = { ...state, loading: false, dataCourseList: action.payload };
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
