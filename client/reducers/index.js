import { combineReducers } from 'redux'
import products from './productsReducers'
import images from './sliderImagesReducers'
import addFavouritesReducer from './uiReducer'

const rootReducer = combineReducers({  
   products,
   images,
   addFavouritesReducer
})

export default rootReducer;