import { combineReducers } from "redux";
import CourseReducer from './course.jsx'
const RootReducer = combineReducers({
    course: CourseReducer
});

export default RootReducer