import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://localhost:4000'
});

export function setHeader(token) {
    api.interceptors.request.use(async function (config) {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
}

export default api;