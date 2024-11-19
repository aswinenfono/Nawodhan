import axios from 'axios';
import { baseApi } from '../config';

export const actionHandler = (payload) => {
    // Headers
    axios.defaults.headers['Content-Type'] = 'application/json';

    // Token for authentication 
    const accessToken = '2dae90c706fcdf6:61531f395c8ab4d';

    if (accessToken) {
        payload.headers = {
            ...payload.headers,
            'Authorization': `Token ${accessToken}`,
        };
    }

    payload.baseURL = baseApi;

    return new Promise((resolve, reject) => {
        axios(payload)
            .then((response) => {
                if ((response.data.status_code >= 200 && response.data.status_code < 300) || (response.status >= 200 && response.status < 300)) {
                    resolve(response);
                } else {
                    reject(response);
                }
            })
            .catch((err) => {
                console.error('Error during API call:', err);
                reject(err);
            });
    });
};

axios.interceptors.response.use(undefined, (err) => {
    const statusCode = err.response?.status;
    if (statusCode === 401 && err.config && !err.config.__isRetryRequest) {
        // Got an unauthorized, logout the user
        localStorage.clear();
        // window.location.pathname = '/signin';
    }
    return Promise.reject(err);
});
