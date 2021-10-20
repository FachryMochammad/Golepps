import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import golfCourseReducer from './golfCourseReducer';

const reducer = combineReducers({
	global: globalReducer,
	golfCourse: golfCourseReducer,
});

export default reducer;
