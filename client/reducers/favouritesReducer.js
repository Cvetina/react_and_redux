import { ADD_FAVOURITES, REMOVE_FAVOURITES } from '../actions/favouritesActions'
import { initialState } from './initialState'

export default function addFavouritesReducer (state = initialState.addFavourites, action) {
  switch (action.type) {
    case ADD_FAVOURITES:
    return Object.assign({}, state, {
      index: action.index,
      items:  
        [...state.items.slice(0, action.index),
         action.item,
         ...state.items.slice(action.index).filter((item, index) => index !== action.index),
      ]
    })
    case REMOVE_FAVOURITES:
    return Object.assign({}, state, {
      index: action.index,
      items:  [
        ...state.items.filter((item, index) => index !== action.index)
      ]
    })
    default:
      return state
  }
};