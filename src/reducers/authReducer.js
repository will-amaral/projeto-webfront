import { SIGN_IN, SIGN_OUT, TOKEN_KEY } from '../actions/types';

const INITIAL_STATE = localStorage.getItem(TOKEN_KEY) !== null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return true;

    case SIGN_OUT:
      return false;

    default:
      return state;
  }
};
