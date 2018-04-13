import { TEST_ACTION, ADD_TODO_TEXT } from '../actions/todosActions'
import { initialState } from './initialState'

export default function todoReducer (state = initialState.todos, action) {
  switch (action.type) {
    case ADD_TODO_TEXT:
    return Object.assign({}, state, {
      todos: action.todos,
      completed: false
    })
    default:
      return state
  }
};                           