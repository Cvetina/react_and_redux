import { applyMiddleware, combineReducers, createStore } from 'redux'
import { toDoReducer } from './reducers/index' 
  
const initialState = {}

export const reducers = combineReducers({
    toDoReducer
});

export function configureStore() {
    const store = createStore(reducers, initialState)
    return store;
};
   
export const store = configureStore();