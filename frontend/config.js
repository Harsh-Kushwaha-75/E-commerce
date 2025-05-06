// filepath: c:\Users\Dell\OneDrive\Desktop\riivorEcommerce\frontend\src\config.js
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import axios from 'axios';
import { API_BASE_URL } from './config';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;