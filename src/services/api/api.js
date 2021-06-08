import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export const register = data => {
  return axios
    .post(`${API_URL}/auth/register`, data)
    .then(data => console.log(data));
};

export const login = data => {
  return axios
    .post(`${API_URL}/auth/login`, data)
    .then(response => response.data);
};

export const resendConfrimationEmail = email => {
  return axios.post(`${API_URL}/auth/send-verification`, { email });
};

export const validateConfirmationToken = token => {
  return axios.post(`${API_URL}/auth/verify`, { token });
};

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}
