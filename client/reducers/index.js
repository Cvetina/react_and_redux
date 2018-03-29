import { TEST_ACTION, ADD_TODO_TEXT } from '../actions/index'

const initialState = {
  isVisible: false,
  todoList: {text: 'To give Gogo`s medical note'}
}
   
export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_TEXT:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TEST_ACTION:
      return [
        ...state, 
        { 
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
};                           