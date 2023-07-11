import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:4000',
})

axiosClient.interceptors.request.use(function (config) {
  config.headers = { ...config.headers, Authorization: `Bearer ${localStorage.getItem('token')}` }
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosClient.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export { axiosClient }