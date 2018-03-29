import { TEST_ACTION } from '../actions/index.js'
   
export const theReducer = (state = {}, action) => {
    switch (action.type) {
        case TEST_ACTION:
        return {
        content: "Hi there"
      };
    default:
        return state;
      }
   };                           