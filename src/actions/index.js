import {
  FETCH_USERS,
  FETCH_ERROR,
  SIGN_IN,
  SIGN_OUT,
  TOKEN_KEY
} from './types';
import api from '../utils/api';

export const fetchUsers = () => async dispatch => {
  try {
    const { data } = await api.get('/admin/users');
    console.log(data);
    await dispatch({ type: FETCH_USERS, payload: data });
  } catch (error) {
    console.log('Erro de requisição');
    dispatch({ type: FETCH_ERROR, payload: error });
  }
};

export const signIn = token => {
  localStorage.setItem(TOKEN_KEY, token);
  return { type: SIGN_IN };
};

export const signOut = () => {
  localStorage.removeItem(TOKEN_KEY);
  return { type: SIGN_OUT };
};
