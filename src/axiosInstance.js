// src/axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  // ✅ Remove `/api/v1` from baseURL
baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api/v1',

});

export default instance;
