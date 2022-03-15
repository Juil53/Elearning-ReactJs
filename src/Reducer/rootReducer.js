import { combineReducers } from "redux";
import { courseCategoryReducer, courseListReducer } from '../templateHome/Courses/_components/CourseList/modules/reducer';
import { courseDetailReducer } from "../templateHome/CourseDetail/modules/reducer";
import signinReducer from "../templateLogin/SignIn/module/reducer";
const rootReducer = combineReducers({
  //child Reducer here
  courseCategoryReducer,
  courseDetailReducer,
  courseListReducer,
  signinReducer,
});

export default rootReducer;
