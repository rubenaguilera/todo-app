import {
  REQUEST_TODOS,
  RECEIVE_TODOS,
  REQUEST_ADD_TODO,
  ADD_TODO
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
    case REQUEST_ADD_TODO:
      return {
        ...state,
        isFetching: true,
      };
    case ADD_TODO:
      return {
        ...state,
        isFetching: false,
        items: [
          ...state.items,
          {
            ...action.payload
          }
        ],
      };
    default:
      return state
  }
};

export default todos
