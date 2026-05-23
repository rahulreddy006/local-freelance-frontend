import axios from 'axios';
import { getAccessToken,getRefreshToken, setTokens, clearAuth } from '../utils/storage';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://local-freelance-backend.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor: attach token
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle 401/403 and refresh token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;
    
    // If error is 401 or 403 and we haven't retried yet, attempt token refresh
    if ((status === 401 || status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getRefreshToken();
      
      if (refreshToken) {
        try {
          const res = await axios.post(`${api.defaults.baseURL}/refresh-token`, { refreshToken });
          if (res.data.accessToken) {
            const newAccessToken = res.data.accessToken;
            const newRefreshToken = res.data.refreshToken || refreshToken;
            setTokens(newAccessToken, newRefreshToken);
            // Update auth header for the retry
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return api(originalRequest);
          }
        } catch (refreshError) {
          clearAuth();
          window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      } else {
        clearAuth();
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);
