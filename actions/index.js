import { FETCH_USERS, FETCH_ERROR } from './types';
import api from '../utils/api';

export const fetchUsers = () => async (dispatch, getState) => {
  try {
    const { data } = await api.get('/admin/users');
    console.log(data);
    await dispatch({ type: FETCH_USERS, payload: data });
  } catch (error) {
    console.log('Erro de requisição');
    dispatch({ type: FETCH_ERROR, payload: error });
  }
};
