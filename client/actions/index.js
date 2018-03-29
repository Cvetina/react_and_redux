export const TEST_ACTION = 'TEST_ACTION'
export const ADD_TODO_TEXT = 'ADD_TODO_TEXT'

export const testAction = (text) => ({
  type: TEST_ACTION,
  text
 });

 export const addTodo = (text) => ({
  type: ADD_TODO_TEXT,
  text
 });
 