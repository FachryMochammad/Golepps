import axios from 'axios';
import toast from 'react-hot-toast';

const serviceHost = 'https://167.172.78.242:8000';
const apiClient = axios.create({
	baseURL: `${serviceHost}`,
});

apiClient.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// console.log("interceptors error:", error);
		if (error.response) {
			if (error.response.status === 400) {
				toast.error(`Error 400 - ${error.response.statusText}`, {
					duration: 6000,
					style: {
						borderRadius: '10px',
						background: '#333',
						color: '#fff',
					},
				});

				return Promise.reject(error);
			}
		}
	}
);

export default apiClient;
