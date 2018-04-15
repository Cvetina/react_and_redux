import axios from 'axios'
import { loadProductsSuccess, errorLoadingProducts } from '../actions/productsActions'
import { loadSliderImages, errorLoadingSliderImages } from '../actions/sliderImagesActions'

export function loadProducts(product) {  
  return function(dispatch) {
    axios.get(`/client/data/${product}.json`)
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