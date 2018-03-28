import React from 'react';

import { connect } from 'react-redux';

import { testAction } from '../store.js';
import { store } from '../store.js';
import { Provider } from 'react-redux';
import style from './styles/App.scss'

class App extends React.Component {
  render() {
    return (
        <div className={style.container}>
          <span>Open up App.js to start working on your app!</span>
          <span>Changes you make will automatically reload.</span>
          <span> {this.props.content}</span>
        </div>
    );
  }
}

export default App