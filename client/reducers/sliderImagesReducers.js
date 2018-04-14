import { LOAD_SLIDER_IMAGES, ERROR_SLIDER_IMAGES } from '../actions/sliderImagesActions'
import { initialState } from './initialState';

export default function productReducer(state = initialState.images, action) {  
  switch(action.type) {
    case LOAD_SLIDER_IMAGES:
    return {
      ...state,
      images: action.payload,
      completed: true
    }
    case ERROR_SLIDER_IMAGES:
    return {
      ...state,
      images: action.payload,
      completed: false
    }
  }
  return state;
}