import apiClient from './index';

// ACTIONS GET
export const getAction = async ({ url }) => {
	return new Promise((resolve, reject) => {
		apiClient({
			method: 'get',
			url,
		})
			.then(({ data }) => {
				resolve({
					data: data,
				});
			})
			.catch((err) => {
				reject(false);
			});
	});
};

// ACTIONS GET WITH PARAMS
export const getActionParams = async ({ url, params }) => {
	return new Promise((resolve, reject) => {
		apiClient({
			method: 'get',
			url,
			params,
		})
			.then(({ data }) => {
				resolve({
					data: data,
				});
			})
			.catch((err) => {
				reject(false);
			});
	});
};

// ACTION POST
export const postAction = async ({ url, data }) => {
	return new Promise((resolve, reject) => {
		apiClient({
			method: 'post',
			url,
			headers: {
				'Content-Type': 'application/json',
			},
			data,
		})
			.then(({ data }) => {
				resolve({
					data: data,
				});
			})
			.catch((err) => {
				reject(false);
			});
	});
};
