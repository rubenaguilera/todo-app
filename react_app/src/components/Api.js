import axios from 'axios';
import { API_URL } from '../config';

class Api {
	static getTodos() {
		console.log('get');
		return axios.get(`${API_URL}/todos`);
	}

	static postTodo(data) {
		return axios.post(`${API_URL}/todos`, data);
	}

	static putTodo(data) {
		return axios.put(`${API_URL}/todos/${data.id}`, data);
	}

	static deleteTodo(id) {
		return axios.delete(`${API_URL}/todos/${id}`);
	}

	//bulk methods
	static putTodos(todos) {
		//TODO: handle this
	}

	static deleteTodos(todos) {
		//TODO: handle this
	}

}

export default Api;