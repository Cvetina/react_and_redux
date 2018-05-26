import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import Plx from 'react-plx'
import { homePageParallaxEffect, homePageImageParallaxEffect } from '../helpers/parallax'
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
          <Plx className={style.infoContainer} parallaxData={homePageParallaxEffect}>
              <h1>Furniture all in one place</h1>
              <p>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable. If you are going to
                use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                free from repetition, injected humour, or non-characteristic words etc.
              </p>
              <p>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable. If you are going to
                use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                free from repetition, injected humour, or non-characteristic words etc.
              </p>
          </Plx>
          <Plx parallaxData={homePageImageParallaxEffect} >
            <img width="100%" src="/client/images/backgrounds/front_page_image.png" alt="Firnish with us" />
          </Plx>
        </div>
      )
    }
  }
   
export default Home