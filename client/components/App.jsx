import React from 'react'
import style from './styles/App'
import Todo from './Todo'

class App extends React.Component {
  render() {
    return (
        <div className={style.container}>
          <Todo />
        </div>
    );
  }
}

export default App