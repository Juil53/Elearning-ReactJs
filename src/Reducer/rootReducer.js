import { combineReducers } from "redux";
import { courseCategoryReducer, courseListReducer } from '../templateHome/Courses/_components/CourseList/modules/reducer';
import { courseDetailReducer } from "../templateHome/CourseDetail/modules/reducer";
import signinReducer from "../templateLogin/SignIn/module/reducer";
import signupReducer from "../templateLogin/SignUp/module/reducer";

const rootReducer = combineReducers({
  //child Reducer here
  courseCategoryReducer,
  courseDetailReducer,
  courseListReducer,
  signinReducer,
  signupReducer,
});

export default rootReducer;
