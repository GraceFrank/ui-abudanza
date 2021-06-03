import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const register = data => {
  return axios
    .post(`${API_URL}/auth/register`, data)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

export const login = data => {
  return axios
    .post(`${API_URL}/auth/login`, data)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

export function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}
