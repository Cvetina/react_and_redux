import { ADD_FAVOURITES, REMOVE_FAVOURITES } from '../actions/favouritesActions'
import { initialState } from './initialState'

export default function addFavouritesReducer (state = initialState.addFavourites, action) {
  switch (action.type) {
    case ADD_FAVOURITES:
    return Object.assign({}, state, {
      items:  
        [...state.items.filter((item) => item.id !== action.item.id), action.item]
    })
    case REMOVE_FAVOURITES:
    return Object.assign({}, state, {
      items:  [
        ...state.items.filter((item, index) => index !== action.index)
      ]
    })
    default:
      return state
  }
};