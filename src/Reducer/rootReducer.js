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
<<<<<<< HEAD
import { adminCourseListReducer } from "../templateAdmin/AdminCourses/modules/reducer";
=======
import adminUserReducer from "../templateAdmin/AdminUsers/modules/reducer";
>>>>>>> 278189b233085cbc7fc151a6531c2ff9aca4df0b

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

<<<<<<< HEAD
  // admin reducer
  adminCourseListReducer
=======
  //Admin reducer
  adminUserReducer,
>>>>>>> 278189b233085cbc7fc151a6531c2ff9aca4df0b
});

export default rootReducer;
