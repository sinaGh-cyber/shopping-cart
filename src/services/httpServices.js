import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';



export const signUp = (data) => {
  return axios.post('/user/register', data);
};

export const login = (data) => {
  return axios.post('/user/login', data);
};
