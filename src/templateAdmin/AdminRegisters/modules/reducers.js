import * as ActionType from "./constants";
const initialState = {
  loadingUserSelector: false,
  dataUserSelector: null,
  errorUserSeletor: null,
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
  }
};

export default registerModalReducer;
