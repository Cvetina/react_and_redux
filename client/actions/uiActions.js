export const TOGGLE_ACTIVE_FAVOURITES = 'TOGGLE_ACTIVE_FAVOURITES'
export const SHOW_ACTIVE_SINGLE_PRODUCT_MODAL = 'SHOW_ACTIVE_SINGLE_PRODUCT_MODAL'
export const HIDE_ACTIVE_SINGLE_PRODUCT_MODAL = 'HIDE_ACTIVE_SINGLE_PRODUCT_MODAL'

export const toggleMenu = () => ({
  type: TOGGLE_ACTIVE_FAVOURITES
 });

 export const showSingleProductModal = (item) => ({
   type: SHOW_ACTIVE_SINGLE_PRODUCT_MODAL,
   item: item
  });
 
 export const hideSingleProductModal = () => ({
   type: HIDE_ACTIVE_SINGLE_PRODUCT_MODAL,
   item: null
  });
 
 
 