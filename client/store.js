import { applyMiddleware, combineReducers, createStore } from 'redux'
import * as reducers from './reducers/index' 
  
const todos = combineReducers(reducers);
const stateFromServer = window.STATE_FROM_SERVER;
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export function configureStore() {
    const store = createStore(todos, stateFromServer, reduxDevtools)
    return store;
};
   
export const store = configureStore();