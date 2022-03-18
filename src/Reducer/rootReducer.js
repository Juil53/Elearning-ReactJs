import { combineReducers } from "redux";
import { courseCategoryReducer, courseListReducer } from '../templateHome/Courses/modules/reducer';
import { courseDetailReducer, courseAddToCartReducer } from "../templateHome/CourseDetail/modules/reducer";
import signinReducer from "../templateLogin/SignIn/module/reducer";
import signupReducer from "../templateLogin/SignUp/module/reducer";

const rootReducer = combineReducers({
  //child Reducer here
  courseAddToCartReducer,
  courseCategoryReducer,
  courseDetailReducer,
  courseListReducer,
  signinReducer,
  signupReducer,
});

export default rootReducer;
