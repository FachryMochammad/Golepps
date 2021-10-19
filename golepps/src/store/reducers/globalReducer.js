const defaultValue = {
	loadingGlobal: false,
	isOffline: false,
};

export default function globalReducer(state = defaultValue, action) {
	switch (action.type) {
		case 'LOADING_GLOBAL':
			return {
				...state,
				loadingGlobal: action.data,
			};

		case 'NO_INTERNET':
			return {
				...state,
				isOffline: action.data,
			};
		default:
			return state;
	}
}
