import * as ActionType from './constant';
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const signinReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return { ...state }
    }
}
export default signinReducer;