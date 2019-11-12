import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import authReducer from './authReducer';
import signUpReducer from './signUpReducer';
import messageReducer from './messageReducer';
import loaderReducer from './loaderReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  addedUsers: signUpReducer,
  message: messageReducer,
  loading: loaderReducer,
  modal: modalReducer
});
