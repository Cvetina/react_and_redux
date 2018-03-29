import React from 'react'
import style from './styles/App.scss'
import InnerApp from './InnerApp.jsx'

class App extends React.Component {
  render() {
    return (
        <div className={style.container}>
          <InnerApp />
        </div>
    );
  }
}

export default App