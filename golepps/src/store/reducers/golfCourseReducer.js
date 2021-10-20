const defaultValue = {
	listGolfCourse: false,
};

export default function golfCourseReducer(state = defaultValue, action) {
	switch (action.type) {
		case 'SET_LIST_GOLF_COURSE':
			return {
				...state,
				listGolfCourse: action.data,
			};
		default:
			return state;
	}
}
