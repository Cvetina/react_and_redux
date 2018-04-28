export const ADD_FAVOURITES = 'ADD_FAVOURITES'
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES'

export const addFavourites = (item, index) => ({
  type: ADD_FAVOURITES,
  item: item,
  index: index
 });

 
export const removeFavourites = (item, index) => ({
  type: REMOVE_FAVOURITES,
  item: item,
  index: index
 });

 