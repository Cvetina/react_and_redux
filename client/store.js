import { applyMiddleware, combineReducers, createStore } from 'redux';
import { theReducer } from './reducers/index' 
  
const initialState = {
    hello: false,
    good: false,
    content: '---Initial Content!!!---'
}

   export const reducers = combineReducers({
    theReducer
   });

   export function configureStore(initialState) {
        const store = createStore(reducers, initialState)
        return store;
   };
   
   export const store = configureStore();