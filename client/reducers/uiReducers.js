import { TOGGLE_ACTIVE_FAVOURITES } from '../actions/uiActions'
import { initialState } from './initialState';

export default function uiReducer(state = initialState.toggleActiveFavourites, action) {  
  switch(action.type) {
    case TOGGLE_ACTIVE_FAVOURITES:
    return {
      ...state,
      toggleActiveFavourites: !state.toggleActiveFavourites
    }
  }
  return state;
}