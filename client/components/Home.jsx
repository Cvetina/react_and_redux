import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import  { loadMainSliderImages }  from '../API/httpRequests'
import MainSlider from './MainSlider'
import LeftSidebar from './LeftSidebar'
import style from './styles/Home'

@connect((store) => {
  return {
    images: store.images.images,
    toggleMenu: store.ui.toggleMenu
  };
})
class Home extends React.Component {   
    componentDidMount() {
      this.props.dispatch(loadMainSliderImages());
    }

    render() {
      const { images, toggleMenu } = this.props;

      return (
        <div className={style.mainContainer}>
          <div className={style.mobileLeftSidebar} >
            <LeftSidebar toggleMenu={toggleMenu} />
          </div>
          {!images &&
            <div className={style.loader}>
              <div className={style.loaderCubeOne} />
              <div className={style.loaderCubeTwo} />
            </div>
          }
          <MainSlider>
            {images &&
                images.slides.map((image, index) => <img key={index} className={style.sliderImage} src={image} />)
            }
          </MainSlider>
        </div>
      )
    }
  }
   
export default Home