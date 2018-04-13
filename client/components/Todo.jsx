import React from 'react'
import connect from 'redux-connect-decorator'
import style from './styles/App'


@connect((store) => {  
    return {
        todos: store.todos
    };
})

class Todo extends React.Component {   
    render() {
      return (
        <div>
          hello
        </div>
      )
    }
  }
   
export default Todo