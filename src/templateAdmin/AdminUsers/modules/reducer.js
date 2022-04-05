import * as ActionType from "./constant";
const initialState = {
  loading: false,
  listuser: null,
  error: null,
};

const adminUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USERLIST_REQUEST:
      state.loading = true;
      state.listuser = null;
      state.error = null;
      return { ...state };
    case ActionType.USERLIST_SUCCESS:
      state.loading = false;
      state.listuser = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.USERLIST_FAILED:
      state.loading = null;
      state.listuser = null;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default adminUserReducer;
