import axios from 'axios';
import { baseApi } from '../config';

export const actionHandler = (payload) => {
  // Set Content-Type once globally if needed
  axios.defaults.headers['Content-Type'] = 'application/json';

  // Token for authentication 
  const accessToken = localStorage.getItem('accessToken');
  const landViewToken = '2dae90c706fcdf6:b244afc045982d8';

  // Set the appropriate Authorization header
  const isLandViewRequest = payload?.url === '/api/resource/EOI%20For%20Land?fields=[%22name%22,%22district2%22,%22land_name%22,%22total_availability_of_land_in_acres_%22,%20%22total_availability_of_land_in_units_%22]' || payload?.url === "/api/resource/EOI%20For%20Land";

  if (accessToken && payload?.url !== 'api/method/frappe.core.doctype.user.user.login') {
    axios.defaults.headers.common["Authorization"] = `Token ${isLandViewRequest ? landViewToken : accessToken}`;
  } else if (isLandViewRequest) {
    axios.defaults.headers.common["Authorization"] = `Token ${landViewToken}`;
  }

  return new Promise((resolve, reject) => {
    payload.baseURL = baseApi;
    axios(payload)
      .then((response) => {
        if (response.data.status_code >= 200 && response.data.status_code < 300 || response.status >= 200 && response.status < 300) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// Interceptor for handling unauthorized responses
axios.interceptors.response.use(undefined, (err) => {
  let statusCode = err.status_code;
  if (statusCode === undefined) {
    // Server needs to specify CORS headers in the response
    const lineSplit = err.toString().split('\n')[0].split(' ');
    statusCode = lineSplit[lineSplit.length - 1];
  }
  return new Promise(() => {
    if (statusCode === 401 && err.config && !err.config.__isRetryRequest) {
      // Got an unauthorized, logout the user
      localStorage.clear();
      window.location.pathname = '/signin';
    }
    throw err;
  });
});
