import { ADD_FAVOURITES } from '../actions/uiActions'
import { initialState } from './initialState'

export default function addFavouritesReducer (state = initialState.addFavourites, action) {
  switch (action.type) {
    case ADD_FAVOURITES:
    return Object.assign({}, state, {
      value: action.value
    })
    default:
      return state
  }
};                           