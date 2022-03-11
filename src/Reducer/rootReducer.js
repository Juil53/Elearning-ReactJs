import { combineReducers } from "redux";
import { courseCategoryReducer, courseListReducer } from '../templateHome/Courses/_components/CourseList/modules/reducer';
import signinReducer from "../templateLogin/SignIn/module/reducer";
const rootReducer = combineReducers({
  //child Reducer here
  courseCategoryReducer,
  courseListReducer,
  signinReducer,
});

export default rootReducer;
