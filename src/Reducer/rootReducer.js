import { combineReducers } from "redux";
import {
  courseCategoryReducer,
  courseListReducer,
} from "../templateHome/Courses/modules/reducer";
import {
  courseDetailReducer,
  courseAddToCartReducer,
} from "../templateHome/CourseDetail/modules/reducer";
import signinReducer from "../templateLogin/SignIn/module/reducer";
import signupReducer from "../templateLogin/SignUp/module/reducer";
import { registerCourseReducer } from "../templateHome/CourseDetail/modules/reducer";
import userProfileReducer from "../templateHome/UserProfile/modules/reducer";
import adminUserReducer from "../templateAdmin/AdminUsers/modules/reducer";
import registerModalReducer from "../templateAdmin/AdminRegisters/modules/reducers";
import { adminCourseListReducer } from "../templateAdmin/AdminCourses/modules/reducer";


const rootReducer = combineReducers({
  //child Reducer here
  courseAddToCartReducer,
  courseCategoryReducer,
  courseDetailReducer,
  courseListReducer,
  signinReducer,
  signupReducer,
  registerCourseReducer,
  userProfileReducer,

  //Admin reducer
  adminUserReducer,
  registerModalReducer,
  adminCourseListReducer,

});

export default rootReducer;
