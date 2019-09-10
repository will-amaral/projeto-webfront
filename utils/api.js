import Axios from 'axios';
import cookie from 'js-cookie';

const api = Axios.create({
    baseURL: 'http://localhost:4000'
});

api.interceptors.request.use(async function (config) {
    const token = cookie.get('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;