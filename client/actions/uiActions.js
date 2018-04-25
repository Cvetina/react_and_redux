export const ADD_FAVOURITES = 'ADD_FAVOURITES'
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES'

export const addFavourites = (item) => ({
  type: ADD_FAVOURITES,
  value: false,
  item: item
 });

 
export const removeFavourites = (index) => ({
  type: REMOVE_FAVOURITES,
  value: false,
  index: index
 });

 