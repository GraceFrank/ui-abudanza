import axios from 'axios';
import instance from '../utils/axios';
const API_URL = process.env.REACT_APP_API_URL;

export const register = (data, ref) => {
  return axios.post(`${API_URL}/auth/register?ref=${ref}`, data);
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

export const getProfile = () => {
  return instance.get('/profile');
};

export const creatProfile = data => {
  return instance.post('/profile', data);
};

export const updateProfile = data => {
  return instance.put('/profile', data);
};

export const getBankDetails = () => {
  return instance.get('/bankdetails');
};

export const addBankDetail = data => {
  return instance.post('/bankdetails', data);
};

export const updateBankDetail = data => {
  return instance.put('/bankdetails', data);
};

export const getNextOfKin = () => {
  return instance.get('/nextofkin');
};

export const addNextOfKin = data => {
  return instance.post('/nextofkin', data);
};

export const updateNextOfKin = data => {
  return instance.put('/nextofkin', data);
};

export const getAssets = (status = 'active') => {
  return instance.get(`/assets?status=${status}`);
};

export const createAsset = formData => {
  return instance.post(`/assets`, formData);
};

export const getInvestments = (status = 'active') => {
  return instance.get(`/investments?status=${status}`);
};

export const createInvestment = formData => {
  return instance.post(`/investments`, formData);
};

export const getReferrals = () => {
  return instance.get(`/referrals`);
};

export const changePassword = ({ currentPassword, newPassword }) => {
  return instance.put(`/auth/change-password`, {
    currentPassword,
    newPassword,
  });
};
