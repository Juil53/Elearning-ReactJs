import * as ActionType from "./constants";
const initialState = {
  loadingUserSelector: false,
  dataUserSelector: null,
  errorUserSeletor: null,

  loadingUserWaiting: false,
  dataUserWaiting: null,
  errorUserWaiting: null,

  loadingUserJoined: false,
  dataUserJoined: null,
  errorUserJoined: null,

  courseCode: "",
};
const registerModalReducer = (state = initialState, action) => {
  // userSelector
  switch (action.type) {
    case ActionType.USER_SELECTOR_REQUEST: {
      state.loadingUserSelector = true;
      state.dataUserSelector = null;
      state.errorUserSeletor = null;
      return { ...state };
    }
    case ActionType.USER_SELECTOR_SUCCESS: {
      state.loadingUserSelector = false;
      state.dataUserSelector = action.payload;
      state.errorUserSeletor = null;
      return { ...state };
    }
    case ActionType.USER_SELECTOR_FAILED: {
      state.loadingUserSelector = false;
      state.dataUserSelector = null;
      state.errorUserSeletor = action.payload;
      return { ...state };
    }

    // user waiting
    case ActionType.USER_WAITING_REQUEST: {
      state.loadingUserWaiting = true;
      state.dataUserWaiting = null;
      state.errorUserWaiting = null;
      return { ...state };
    }
    case ActionType.USER_WAITING_SUCCESS: {
      state.loadingUserWaiting = false;
      state.dataUserWaiting = action.payload;
      state.errorUserWaiting = null;
      return { ...state };
    }
    case ActionType.USER_WAITING_FAILED: {
      state.loadingUserWaiting = false;
      state.dataUserWaiting = null;
      state.errorUserWaiting = action.payload;
      return { ...state };
    }

    // user joied
    case ActionType.USER_JOINED_REQUEST: {
      state.loadingUserJoined = true;
      state.dataUserJoined = null;
      state.errorUserJoined = null;
      return { ...state };
    }
    case ActionType.USER_JOINED_SUCCESS: {
      state.loadingUserJoined = false;
      state.dataUserJoined = action.payload;
      state.errorUserJoined = null;
      return { ...state };
    }
    case ActionType.USER_JOINED_FAILED: {
      state.loadingUserJoined = false;
      state.dataUserJoined = null;
      state.errorUserJoined = action.payload;
      return { ...state };
    }

    // get code course
    case ActionType.GET_CODECOURSE: {
      state.courseCode = action.payload;
      return { ...state };
    }

    // admin register course
    case ActionType.ADMIN_REGISTER_COURSE_REQUEST: {
      state.loading = true;
      state.registerData = null;
      state.registerError = null;
      return { ...state };
    }
    case ActionType.ADMIN_REGISTER_COURSE_SUCCESS: {
      state.loading = false;
      state.registerData = action.payload;
      state.registerError = null;
      return { ...state };
    }
    case ActionType.ADMIN_REGISTER_COURSE_FAILED: {
      state.loading = false;
      state.registerData = null;
      state.registerError = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default registerModalReducer;
