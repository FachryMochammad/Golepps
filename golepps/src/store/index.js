import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
const composeEnchancer =
	window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(reducer, composeEnchancer(applyMiddleware(thunk)));

export default store;
