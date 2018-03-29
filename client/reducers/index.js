import { TEST_ACTION, ADD_TODO_TEXT } from '../actions/index'
   
export const toDoReducer = (state = {todos: {text: 'First toDo'}}, action) => {
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