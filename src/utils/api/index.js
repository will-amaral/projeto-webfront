import jwtDecode from 'jwt-decode';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http://localhost:4000',
});

export const mockAxios = Axios.create();

class AuthService {
  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          this.setSession(null);
          if (onLogout) {
            onLogout();
          }
        }
        return Promise.reject(error);
      }
    );
  };

  handleAuthentication() {
    const accessToken = this.getAccessToken();

    if (!accessToken) {
      return;
    }

    if (this.isValidToken(accessToken)) {
      this.setSession(accessToken);
    } else {
      this.setSession(null);
    }
  }

  loginWithEmailAndPassword = (email, password) =>
    new Promise((resolve, reject) => {
      axios
        .post('/login', { email, password })
        .then((response) => {
          if (this.isValidToken(response.data.token)) {
            this.setSession(response.data.token);
            resolve(response.data.token);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

  loginInWithToken = () => {
    const token = this.getAccessToken();
    const decoded = jwtDecode(token);
    return decoded;
  };

  logout = () => {
    this.setSession(null);
  };

  setSession = (accessToken) => {
    if (accessToken) {
      localStorage.removeItem('accessToken');
      localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem('accessToken');
      delete axios.defaults.headers.common.Authorization;
    }
  };

  getAccessToken = () => localStorage.getItem('accessToken');

  isValidToken = (accessToken) => {
    if (!accessToken) {
      return false;
    }

    const decoded = jwtDecode(accessToken);

    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  };

  isAuthenticated = () => !!this.getAccessToken();
}

const authService = new AuthService();

export default authService;
