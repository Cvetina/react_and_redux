import { combineReducers } from 'redux'
import products from './productsReducers'
import images from './sliderImagesReducers'
import todos from './todoReducer'

const rootReducer = combineReducers({  
   products,
   images,
   todos
})

export default rootReducer;