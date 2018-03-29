import React from 'react'
import { bindActionCreators } from 'redux'
import connect from 'redux-connect-decorator'
import * as actions from '../actions'
import style from './styles/App'


@connect((store) => {  
    return {
        todos: store.todos.todoList.text
    };
})

class Todo extends React.Component {   
    render() {
        const { todos } = this.props
      return (
        <div>
         {todos}
        </div>
      )
    }
  }
   
export default Todo