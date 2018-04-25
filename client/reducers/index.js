import { combineReducers } from 'redux'
import products from './productsReducers'
import images from './sliderImagesReducers'
import favourites from './uiReducer'

const rootReducer = combineReducers({  
   products,
   images,
   favourites
})

export default rootReducer;