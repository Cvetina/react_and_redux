import { combineReducers } from 'redux'
import products from './productsReducers'
import todos from './todoReducer'

const rootReducer = combineReducers({  
   products,
   todos
})

export default rootReducer;