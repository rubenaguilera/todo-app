import {
  REQUEST_TODOS,
  RECEIVE_TODOS
} from '../actions/types';

const todos = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_TODOS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_TODOS:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
      };
    default:
      return state
  }
};

export default todos
