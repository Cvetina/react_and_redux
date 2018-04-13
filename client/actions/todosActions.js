export const TEST_ACTION = 'TEST_ACTION'
export const ADD_TODO_TEXT = 'ADD_TODO_TEXT'

export const testAction = (todos) => ({
  type: TEST_ACTION,
  todos
 });

export const addTodo = (todos) => ({
  type: ADD_TODO_TEXT,
  todos
});
 