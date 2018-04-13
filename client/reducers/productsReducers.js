import { LOAD_PRODUCTS_SUCCESS, ERROR_LOAD_PRODUCTS } from '../actions/productsActions'
import { initialState } from './initialState';

export default function productReducer(state = initialState.products, action) {  
  switch(action.type) {
    case LOAD_PRODUCTS_SUCCESS:
    return {
      ...state,
      products: action.payload,
      completed: true
    }
    case ERROR_LOAD_PRODUCTS:
    return {
      ...state,
      products: action.payload,
      completed: false
    }
  }
  return state;
}