import axios from 'axios'

export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const ERROR_LOAD_PRODUCTS = 'ERROR_LOAD_PRODUCTS';

export function loadProductsSuccess(products) {
  return {
    type: LOAD_PRODUCTS_SUCCESS, 
    payload: products.data
  };
}

export function errorLoadingProducts(products) {
  return {
    type: ERROR_LOAD_PRODUCTS, 
    payload: products.error
  };
}


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