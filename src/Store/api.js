import axios from 'axios';
import { baseApi } from '../config';

export const actionHandler = (payload) => {
  // Set default headers
  const headers = {
    'Content-Type': 'application/json'
  };

  // Retrieve tokens
  const accessToken = localStorage.getItem('accessToken');
  const landViewToken = '2dae90c706fcdf6:b244afc045982d8';

  if (payload?.url === 'api/method/develop.rest.custom_login') {
    // console.log("checking login>>>>>", payload?.url);
    // No token for login request
  } else if (payload?.url === '/api/resource/EOI%20For%20Land?fields=[%22name%22,%22district2%22,%22land_name%22,%22total_availability_of_land_in_acres_%22,%20%22total_availability_of_land_in_units_%22]' ||
    payload?.url === "/api/resource/EOI%20For%20Land") {
    headers["Authorization"] = "Token " + landViewToken;
  } else if (accessToken) {
    headers["Authorization"] = "Token " + accessToken;
  }

  return new Promise((resolve, reject) => {
    axios({
      ...payload,
      baseURL: baseApi,
      headers, // Use local headers instead of global defaults
    })
      .then((response) => {
        if ((response.data.status_code >= 200 && response.data.status_code < 300) ||
          (response.status >= 200 && response.status < 300)) {
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

// Interceptor for handling 401 errors
axios.interceptors.response.use(undefined, (err) => {
  let statusCode = err.response?.status;

  if (!statusCode) {
    // Try to extract status code from the error string
    const lineSplit = err.toString().split('\n')[0].split(' ');
    statusCode = lineSplit[lineSplit.length - 1];
  }

  return new Promise(() => {
    if (statusCode === 401 && err.config && !err.config.__isRetryRequest) {
      // Clear localStorage and redirect to login on unauthorized
      localStorage.clear();
      window.location.pathname = '/signin';
    }
    throw err;
  });
});
