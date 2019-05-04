import {
  ADD_TODO,
  TOGGLE_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS,
  REQUEST_ADD_TODO
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

const requestAddTodo = () => ({
  type: REQUEST_ADD_TODO
});

export const addTodo = data => ({
  type: ADD_TODO,
  payload: {
    ...data
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

export const saveTodo = (todo) => {
  return dispatch => {
    dispatch(requestAddTodo());
    return Api.postTodo(todo)
      .then(response => {
        console.log(response);
        dispatch(addTodo(response.data));
      })
      .catch(error => console.error(`Error saving todo: ${error}`));
  };
};