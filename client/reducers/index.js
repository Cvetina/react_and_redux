import { combineReducers } from 'redux'
import products from './productsReducers'
import mainSliderReducer from './sliderImagesReducers'
import todos from './todoReducer'

const rootReducer = combineReducers({  
   products,
   mainSliderReducer,
   todos
})

export default rootReducer;