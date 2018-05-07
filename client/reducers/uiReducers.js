import { TOGGLE_ACTIVE_FAVOURITES, SHOW_ACTIVE_SINGLE_PRODUCT_MODAL, HIDE_ACTIVE_SINGLE_PRODUCT_MODAL } from '../actions/uiActions'
import { initialState } from './initialState';

export default function uiReducer(state = initialState, action) {  
  switch(action.type) {
    case TOGGLE_ACTIVE_FAVOURITES:
    return {
      ...state,
      toggleMenu: !state.toggleMenu
    }
    case SHOW_ACTIVE_SINGLE_PRODUCT_MODAL:
    return {
      ...state,
      itemID: action.item.id
    }
    case HIDE_ACTIVE_SINGLE_PRODUCT_MODAL:
    return {
      ...state,
      itemID: action.item
    }
  }
  return state;
}