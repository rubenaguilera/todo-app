import {
  ADD_TODO,
  TOGGLE_TODO,
  REQUEST_TODOS,
  REQUEST_TODO,
  RECEIVE_TODOS,
  RECEIVE_TODO,
	REQUEST_DELETE_TODOS,
  REQUEST_ADD_TODO,
	CLEAN_SELECTED_TODO
} from './types';
import Api from '../components/Api';

const requestTodos = () => ({
  type: REQUEST_TODOS
});

const requestTodo = () => ({
	type: REQUEST_TODO
});

const receiveTodos = (data) => ({
  type: RECEIVE_TODOS,
  payload: data
});

const receiveTodo = (data) => ({
	type: RECEIVE_TODO,
	payload: data
});

const requestDeleteTodos = () => ({
	type: REQUEST_DELETE_TODOS,
});

export const cleanSelectedTodo = () => ({
	type: CLEAN_SELECTED_TODO
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

export const fetchTodo = (id) => {
	return dispatch => {
		dispatch(requestTodo());
		return Api.getTodo(id)
			.then(response => {
				dispatch(receiveTodo(response.data));
			})
			.catch(error => console.error(`Error fetching todo: ${error}`));
	};
};

export const saveTodo = (todo) => {
  return dispatch => {
    dispatch(requestAddTodo());
    return Api.postTodo(todo)
      .then(response => {
        dispatch(addTodo(response.data));
      })
      .catch(error => console.error(`Error saving todo: ${error}`));
  };
};

export const deleteTodos = (ids) => {
	return dispatch => {
		dispatch(requestDeleteTodos());
		return Api.deleteTodos(ids)
			.then(response => {
				dispatch(fetchTodos());
			})
			.catch(error => console.error(`Error removing todos: ${error}`));
	};
};