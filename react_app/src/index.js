import * as serviceWorker from './serviceWorker';
import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Root from './Root';
import rootReducer from './reducers';
import { INICIAL_STATE } from './shared/Constants';

const store = createStore(
	rootReducer,
	INICIAL_STATE,
	applyMiddleware(
		thunkMiddleware
	),
);

render(<Root store={store} />, document.getElementById('root'));

serviceWorker.unregister();
