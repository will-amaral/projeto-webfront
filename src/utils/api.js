import Axios from 'axios';
import { TOKEN_KEY } from '../actions/types';

const api = Axios.create({
  baseURL: 'http://localhost:4000'
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
