import { FETCH_USERS, FETCH_ERROR, SIGN_IN, SIGN_OUT, TOKEN_KEY, SIGN_UP } from './types';
import api from '../utils/api';

export const fetchUsers = () => async dispatch => {
  try {
    const { data } = await api.get('/admin/users');
    await dispatch({ type: FETCH_USERS, payload: data });
  } catch (error) {
    console.log('Erro de requisição');
    dispatch({ type: FETCH_ERROR, payload: error });
  }
};

export const signUp = form => async dispatch => {
  try {
    const { data } = await api.post('/signup', form);
    await dispatch({ type: SIGN_UP, payload: data });
  } catch (error) {
    console.log('Erro de requisição');
    await dispatch({ type: FETCH_ERROR, payload: error });
  }
};

export const signIn = token => async dispatch => {
  localStorage.setItem(TOKEN_KEY, token);
  await dispatch({ type: SIGN_IN });
  dispatch(fetchUsers());
};

export const signOut = () => {
  localStorage.removeItem(TOKEN_KEY);
  return { type: SIGN_OUT };
};
