import { DELETE_USER } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case DELETE_USER:
      return action.payload;

    default:
      return state;
  }
};
