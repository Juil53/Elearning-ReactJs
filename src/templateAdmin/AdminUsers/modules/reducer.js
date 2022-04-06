import * as ActionType from "./constant";

const initialState = {
  loading: false,
  listuser: null,
  error: null,
  userInfo: null,
  open: false,
  keyword: "",
};
const adminUserReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET USERLIST
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
      state.loading = false;
      state.listuser = null;
      state.error = action.payload;
      return { ...state };

    //SUBMIT USER
    case ActionType.ONSUBMIT_REQUEST:
      state.loading = true;
      state.error = null;
      return { ...state };
    case ActionType.ONSUBMIT_SUCCESS:
      state.loading = false;

      let userList = [...state.listuser.items];
      if (action.payload.taiKhoan) {
        const index = userList.findIndex(
          (user) => user.taiKhoan === action.payload.taiKhoan
        );
        if (index !== -1) {
          userList[index] = action.payload;
        } else {
          // ADD
          const userNew = { ...action.payload };
          userList.push(userNew);
        }
      }
      state.listuser.items = userList;
      state.error = null;
      return { ...state };
    case ActionType.ONSUBMIT_FAILED:
      state.loading = false;
      state.error = action.payload;
      return { ...state };

    //GETUSERINFO
    case ActionType.GETUSERINFO_REQUEST:
      state.userInfo = action.payload;
      return { ...state };

    //MODAL
    case ActionType.OPENMODAL:
      state.open = true;
      return { ...state };
    case ActionType.CLOSEMODAL:
      state.open = false;
      return { ...state };

    // SEARCH
    case ActionType.GETKEYWORD:
      state.keyword = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default adminUserReducer;
