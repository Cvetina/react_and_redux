import { TOGGLE_ACTIVE_FAVOURITES } from '../actions/uiActions'
import { initialState } from './initialState';

export default function uiReducer(state = initialState.toggleMenu, action) {  
  switch(action.type) {
    case TOGGLE_ACTIVE_FAVOURITES:
    return {
      ...state,
      toggleMenu: !state.toggleMenu
    }
  }
  return state;
}