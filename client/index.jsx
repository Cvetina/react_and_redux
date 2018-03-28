import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

import { testAction, store } from './store';
import App from './components/App.jsx'
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

const mapStateToProps = (state) => ({
  content: state.content || "Please Wait...",
});

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: () => {
      dispatch(testAction())
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);