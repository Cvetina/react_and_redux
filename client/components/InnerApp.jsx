import React from 'react'
import { connect } from 'react-redux'
import { testAction } from '../store'
import style from './styles/App'


const InnerApp = (testAction) => {
    return (
        <div className={style.container}>
          <span> {testAction.content} </span>
        </div>
    );
}

const mapStateToProps = (state) => {
 return {
    content: state.content || "Please Wait..."
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: () => {
      dispatch(testAction())
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerApp)