import {
  FETCH_USERS,
  FETCH_ERROR,
  SIGN_IN,
  SIGN_OUT,
  TOKEN_KEY,
  SIGN_UP,
  SET_MESSAGE,
  CLOSE_MESSAGE,
  TOGGLE_LOADING,
  TOGGLE_MODAL
} from './types';
import api from '../utils/api';

export const fetchUsers = () => async dispatch => {
  try {
    const { data } = await api.get('/admin/users');
    dispatch({ type: FETCH_USERS, payload: data });
  } catch (error) {
    console.log('Erro de requisição');
    dispatch({ type: FETCH_ERROR, payload: error });
  }
};

export const signUp = form => async dispatch => {
  dispatch(toggleLoading(true));
  try {
    const { data } = await api.post('/signup', form);
    await dispatch({ type: SIGN_UP, payload: data });
    await dispatch(fetchUsers());
    await dispatch(toggleModal(false));
    dispatch(toggleLoading(false));
  } catch (error) {
    console.log('Erro de requisição');
    console.log(error);
    await dispatch(toggleLoading(false));
    dispatch({ type: FETCH_ERROR, payload: error });
  }
};

export const signIn = (email, password) => async dispatch => {
  if (!email || !password) {
    const message = { text: 'Preencha todos os campos para continuar!', color: 'danger' };
    dispatch(setMessage(message));
  } else {
    dispatch(toggleLoading(true));
    try {
      const {
        data: { token }
      } = await api.post('/login', { email, password });
      localStorage.setItem(TOKEN_KEY, token);
      await dispatch({ type: SIGN_IN });
      dispatch(fetchUsers());
    } catch (err) {
      let text;
      if (!err.response) {
        text = 'Erro de servidor';
      } else if (!err.response.data.message) {
        text = 'Senha incorreta';
      } else {
        text = err.response.data.message;
      }
      const message = { text, color: 'danger' };
      await dispatch(setMessage(message));
      await dispatch(toggleLoading(false));
      dispatch({ type: FETCH_ERROR, payload: err });
    }
  }
};

export const signOut = () => {
  localStorage.removeItem(TOKEN_KEY);
  return { type: SIGN_OUT };
};

export const setMessage = message => {
  return {
    type: SET_MESSAGE,
    payload: message
  };
};

export const closeMessage = () => {
  return { type: CLOSE_MESSAGE };
};

export const toggleLoading = bool => {
  return { type: TOGGLE_LOADING, payload: bool };
};

export const toggleModal = bool => {
  return { type: TOGGLE_MODAL, payload: bool };
};
