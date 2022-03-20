import * as ActionType from './constants';

const initialState = {
    loading: false,
    courseDetailData: null,
    error: null
}

const cartInitialState = {
    courseListInCart: [],
}
const registerInitialState={
    loading: false,
    registerData: null,
    registerError: null,
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

export const registerCourseReducer=(state=registerInitialState, action)=>{
    switch(action.type){
        case ActionType.REGISTER_COURSE_REQUEST:{
            state.loading=true;
            state.registerData=null;
            state.registerError=null;
            return{...state}
        }
        case ActionType.REGISTER_COURSE_SUCCESS:{
            state.loading=false;
            state.registerData=action.payload;
            state.registerError=null;
            return{...state}
        }
        case ActionType.REGISTER_COURSE_FAILED:{
            state.loading=false;
            state.registerData=null;
            state.registerError=action.payload;
            return{...state}
        }
        default: return{...state}
    }

}