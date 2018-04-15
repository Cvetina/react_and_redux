import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import  { loadMainSliderImages }  from '../API/httpRequests'
import MainSlider from './MainSlider'
import style from './styles/Home'

@connect((store) => {
  return {
    images: store.images.images
  };
})
class Home extends React.Component {   
    componentDidMount() {
      this.props.dispatch(loadMainSliderImages());
    }

    render() {
      const { images } = this.props;

      return (
        <div className={style.mainContainer}>
          {!images &&
            <div>Loading...</div>
          }
          <MainSlider>
            {images &&
                images.slides.map(image => <img className={style.sliderImage} src={image} />)
            }
          </MainSlider>
        </div>
      )
    }
  }
   
export default Home