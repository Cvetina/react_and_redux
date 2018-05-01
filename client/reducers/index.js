import { combineReducers } from 'redux'
import products from './productsReducers'
import images from './sliderImagesReducers'
import favourites from './favouritesReducer'
import ui from './uiReducers'

const rootReducer = combineReducers({  
   products,
   images,
   favourites,
   ui
})

export default rootReducer;