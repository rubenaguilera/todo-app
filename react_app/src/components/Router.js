import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const Router = () => (
	<main>
		<Switch>
			<Redirect from='/' exact  to='/todos'/>
			<Route exact path="/todos" component={TodoList} />
			<Route exact path="/todos/new" component={AddTodo} />
		</Switch>
	</main>
);

export default Router;