import * as ActionType from './constants';

const initialState = {
    loading: false,
    courseDetailData: null,
    error: null
}

const cartInitialState = {
    courseListInCart: [],
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

export const courseAddToCartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case ActionType.COURSE_ADD_TO_CART: {
            const idx = state.courseListInCart.findIndex(course => course.maKhoaHoc === action.payload.maKhoaHoc);
            if (idx !== -1) {
                return { ...state }
            }
            const newCourseListInCart = [...state.courseListInCart, action.payload];
            console.log(newCourseListInCart);
            const newState = { ...state, courseListInCart: newCourseListInCart };
            state = newState;
            return { ...state }
        }
        default:
            return state
    }
}
