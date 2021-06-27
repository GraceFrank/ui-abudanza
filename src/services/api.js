import axios from 'axios';
import instance from '../utils/axios';
const API_URL = process.env.REACT_APP_API_URL;

export const register = data => {
  return axios.post(`${API_URL}/auth/register`, data);
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

export const getProfile = token => {
  return axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const creatProfile = (token, data) => {
  return axios.post(`${API_URL}/profile`, JSON.stringify(data), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = (token, data) => {
  return axios.put(`${API_URL}/profile`, JSON.stringify(data), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getBankDetails = token => {
  return axios.get(`${API_URL}/bankdetails`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addBankDetail = (token, data) => {
  return axios.post(`${API_URL}/bankdetails`, JSON.stringify(data), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateBankDetail = (token, data) => {
  return axios.put(`${API_URL}/bankdetails`, JSON.stringify(data), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getNextOfKin = token => {
  return axios.get(`${API_URL}/nextofkin`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addNextOfKin = (token, data) => {
  return axios.post(`${API_URL}/nextofkin`, JSON.stringify(data), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateNextOfKin = (token, data) => {
  return axios.put(`${API_URL}/nextofkin`, JSON.stringify(data), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAssets = (status = 'active') => {
  return instance.get(`/assets?status=${status}`);
};

export const createAsset = formData => {
  return instance.post(`/assets`, formData);
};
