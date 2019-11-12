import { SET_MESSAGE, CLOSE_MESSAGE } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.payload;

    case CLOSE_MESSAGE:
      return null;

    default:
      return state;
  }
};
