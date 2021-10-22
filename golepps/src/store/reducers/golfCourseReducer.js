const defaultValue = {
	listGolfCourse: false,
	detailGolfCourse: false,
	loadingSearch: false,
};

export default function golfCourseReducer(state = defaultValue, action) {
	switch (action.type) {
		case 'SET_LIST_GOLF_COURSE':
			return {
				...state,
				listGolfCourse: action.data,
			};
		case 'SET_DETAIL_GOLF_COURSE':
			return {
				...state,
				detailGolfCourse: action.data,
			};
		case 'SET_LOADING_SEARCH_GOLF_COURSE':
			return {
				...state,
				loadingSearch: action.data,
			};
		default:
			return state;
	}
}
