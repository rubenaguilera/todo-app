import {
  ADD_TODO,
  TOGGLE_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS
} from './types';
import { TODO_STATE_TODO } from '../shared/Constants';
import Api from '../components/Api';

const requestTodos = () => ({
  type: REQUEST_TODOS
});

const receiveTodos = (data) => ({
  type: RECEIVE_TODOS,
  payload: data
});

export const addTodo = data => ({
  type: ADD_TODO,
  payload: {
    ...data,
    state: TODO_STATE_TODO
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});

//TODO: handle filters
export const fetchTodos = () => {
  return dispatch => {
    dispatch(requestTodos());
    return Api.getTodos()
      .then(response => {
        dispatch(receiveTodos(response.data));
      })
      .catch(error => console.error(`Error fetching todos: ${error}`));
  };
};