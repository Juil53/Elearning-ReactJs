import * as ActionType from './constant';
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const signinReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.AUTHSIGNIN_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        case ActionType.AUTHSIGNIN_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        case ActionType.AUTHSIGNIN_FAILED:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        default:
            return { ...state }
    }
}
export default signinReducer;