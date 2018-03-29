export const TEST_ACTION = 'TEST_ACTION'
export const ADD_TODO_TEXT = 'ADD_TODO_TEXT'

export const testAction = (text) => ({
  type: TEST_ACTION,
  text: 'This is test action'
 });

 export const addTodo = (text) => ({
  type: ADD_TODO_TEXT,
  text: 'This is add Todo action'
 });
 