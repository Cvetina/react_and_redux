import { ADD_FAVOURITES, REMOVE_FAVOURITES } from '../actions/uiActions'
import { initialState } from './initialState'

export default function addFavouritesReducer (state = initialState.addFavourites, action) {
  switch (action.type) {
    case ADD_FAVOURITES:
    return Object.assign({}, state, {
      value: action.value,
      items:  [...state.items, action.item]
    })
    case REMOVE_FAVOURITES:
    return Object.assign({}, state, {
      value: action.value,
      items:  [...state.items, state.items.filter((i) => i !== action.item)]
    })
    default:
      return state
  }
};