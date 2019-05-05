import {
  REQUEST_TODOS,
  REQUEST_TODO,
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REQUEST_ADD_TODO,
  ADD_TODO, CLEAN_SELECTED_TODO
} from '../actions/types';

const todos = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_TODOS || REQUEST_TODO:
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
    case RECEIVE_TODO:
      return {
        ...state,
        isFetching: false,
        selectedTodo: action.payload,
      };
    case CLEAN_SELECTED_TODO:
      return {
        ...state,
        selectedTodo: {},
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
