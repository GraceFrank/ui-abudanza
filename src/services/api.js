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
  return axios.get(`${API_URL}/auth/verify`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getProfile = () => {
  return instance.get('/profile');
};
export const getAllProfiles = () => {
  return instance.get('/profile/all');
};

export const createProfile = data => {
  return instance.post('/profile', data);
};

export const updateProfile = data => {
  return instance.put('/profile', data);
};
export const uploadIdCard = data => {
  return instance.put('/profile/upload', data);
};

export const uploadID = formData => {
  return instance.post('/profile/idcard', formData);
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
export const getAllAssets = (status = '', page = 1) => {
  return instance.get(`/assets/all?status=${status}&page=${page}`);
};

export const createAsset = formData => {
  return instance.post(`/assets`, formData);
};
export const approveAsset = (id, data) => {
  return instance.put(`/assets/${id}/approval`, data);
};

export const getInvestments = (status = 'active') => {
  return instance.get(`/investments?status=${status}`);
};
export const getAllInvestments = (status = '', page = 1) => {
  return instance.get(`/investments/all?status=${status}&page=${page}`);
};

export const createInvestment = formData => {
  return instance.post(`/investments`, formData);
};
export const approveInvestment = (id, data) => {
  return instance.put(`/investments/${id}/approval`, data);
};

export const getReferrals = () => {
  return instance.get(`/referrals`);
};
export const getAllReferrals = (invested, paid, page = 1) => {
  const query = '';
  if (invested) query += `&invested=${invested}`;
  if (paid) query += `&paid=${paid}`;
  return instance.get(`/referrals/all?page=${page}${query}`);
};

export const changePassword = ({ currentPassword, newPassword }) => {
  return instance.put(`/auth/change-password`, {
    currentPassword,
    newPassword,
  });
};

export const adminLogin = data => {
  return axios
    .post(`${API_URL}/auth/admin/login`, data)
    .then(response => response.data);
};
