import axios from 'axios'
import { loadProductsSuccess, errorLoadingProducts } from '../actions/productsActions'
import { loadSliderImages, errorLoadingSliderImages } from '../actions/sliderImagesActions'

export function loadProducts() {  
  return function(dispatch) {
    axios.get('/client/data/furniture_data.json')
    .then((response) => {
      dispatch(loadProductsSuccess(response))
    }).catch(err => {
      dispatch(errorLoadingProducts(err))
    });
  };
}

export function loadMainSliderImages() {  
  return function(dispatch) {
    axios.get('/client/data/home_slider.json')
    .then((response) => {
      dispatch(loadSliderImages(response))
    }).catch(err => {
      dispatch(errorLoadingSliderImages(err))
    });
  };
}