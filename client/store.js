import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/index' 
import thunk from 'redux-thunk'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = applyMiddleware(thunk);

export const store = createStore(
    rootReducer, 
    reduxDevtools,       
    middleware
);
