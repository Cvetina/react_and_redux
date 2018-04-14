import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import  { loadMainSliderImages }  from '../API/httpRequests'
import style from './styles/App'

@connect((store) => {
  return {
    images: store.images
  };
})
class Home extends React.Component {   
    componentDidMount() {
      this.props.dispatch(loadMainSliderImages());
    }

    render() {
      const { images } = this.props;

      return (
        <div>
          hello
        </div>
      )
    }
  }
   
export default Home