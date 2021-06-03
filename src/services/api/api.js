import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      logout();
      window.location.reload(false);
    }
    return Promise.reject(error.response.data);
  }
);

export const register = data => {
  return axios
    .post(`${API_URL}/auth/register`, data)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

export const login = data => {
  return axios
    .post(`${API_URL}/auth/login`, data)
    .then(response => response.data);
};

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}
