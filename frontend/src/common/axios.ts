import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 7000,
});

Axios.interceptors.request.use(
  function (config) {
    config.headers['Authorization'] = 'Bearer FSMovies2023';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log('errrr', error);
    return Promise.reject(error.response.data.message);
  }
);
