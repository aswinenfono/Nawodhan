import axios from 'axios';
import { baseApi } from '../config';

export const actionHandler = (payload) => {
  // Headers
  axios.defaults.headers['Content-Type'] = 'application/json';

  // Token for authentication 

  const accessToken = localStorage.getItem('accessToken');
  const landViewToken = '2dae90c706fcdf6:b244afc045982d8';

  if (accessToken && payload?.url !== 'api/method/frappe.core.doctype.user.user.login') {
    console.log('checkinggg>>>>>')
    if (payload?.url === '/api/resource/EOI%20For%20Land?fields=[%22name%22,%22district%22,%22land_name%22,%22total_availability_of_land_in_acres_%22,%20%22total_availability_of_land_in_units_%22]') {
      axios.defaults.headers.common["Authorization"] = "Token " + landViewToken;
    } else {
      axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
    }
  } else {
    if (payload?.url === '/api/resource/EOI%20For%20Land?fields=[%22name%22,%22district%22,%22land_name%22,%22total_availability_of_land_in_acres_%22,%20%22total_availability_of_land_in_units_%22]') {
      console.log('checkinggg>>>>>')
      axios.defaults.headers.common["Authorization"] = "Token " + landViewToken;
    }
  }

  return new Promise((resolve, reject) => {
    payload.baseURL = baseApi
    axios(payload)
      .then((response) => {
        if (response.data.status_code >= 200 || response.status >= 200 && response.data.status_code < 300 || response.status < 300) {
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

axios.interceptors.response.use(undefined, (err) => {
  let statusCode = err.status_code;
  if (statusCode === undefined) {
    // Server needs to specify CORS headers in the response
    // Basically `ACCESS-CONTROL-ALLOW-ORIGIN: *`
    // Otherwise, these kinda issues happen
    const lineSplit = err.toString().split('\n')[0].split(' ');
    statusCode = lineSplit[lineSplit.length - 1];
  }
  return new Promise(() => {
    if (statusCode === 401 && err.config && !err.config.__isRetryRequest) {
      // Got an unauthorized, logout the user
      localStorage.clear();
      window.location.pathname = '/auth/sign-in';
    }
    throw err;
  });
});
