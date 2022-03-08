import { combineReducers } from "redux";
import { courseCategoryReducer, courseListReducer } from '../templateHome/Courses/_components/CourseList/modules/reducer';

const rootReducer = combineReducers({
  //child Reducer here
  courseCategoryReducer,
  courseListReducer,
});

export default rootReducer;
