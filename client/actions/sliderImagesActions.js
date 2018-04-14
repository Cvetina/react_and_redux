export const LOAD_SLIDER_IMAGES = 'LOAD_SLIDER_IMAGES';
export const ERROR_SLIDER_IMAGES = 'ERROR_SLIDER_IMAGES';

export function loadSliderImages(images) {
  return {
    type: LOAD_SLIDER_IMAGES, 
    payload: images.data
  };
}

export function errorLoadingSliderImages(images) {
  return {
    type: ERROR_SLIDER_IMAGES, 
    payload: images.error
  };
}