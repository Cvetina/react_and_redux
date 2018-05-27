import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import Plx from 'react-plx'
import { homePageParallaxEffect, homePageImageParallaxEffect, homePageMobileParallaxEffect } from '../helpers/parallax'
import { isMobile } from '../helpers/isMobile'
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
          <Plx className={style.infoContainer} parallaxData={isMobile.any() ? homePageMobileParallaxEffect : homePageParallaxEffect}>
              <h1>Discover the Modern Furniture in one place</h1>
              <p>
                With a sense of simplicity, modern furniture style is defined by clean and crisp lines, a simple design, neutral color palette,
                and “cold” materials. The style grew out of the decorative arts and was started in the 20th century.
              </p>
              <p>
                Transitional furniture is the bridge between traditional and contemporary styles. Transitional style draws on the best
                elements from traditional, modern and casual styles. Understated patterns and luxurious elements like marble and rich
                wood add visual pops. Key style details include clean lines, neutral colors, minimal accents and a harmonious flow to the room.
              </p>
              <p>
                Casual furniture is all about comfort. Pieces typically include plush cushioning, generous seating and relaxed styling, making it
                a good choice for unwinding with family and friends. Casual furniture often features recline mechanisms and special features like
                cup holders or storage compartments.
              </p>
          </Plx>
          <Plx parallaxData={isMobile.any() ? homePageMobileParallaxEffect : homePageImageParallaxEffect}>
            <img width="100%" src="/client/images/backgrounds/front_page_image.png" alt="Firnish with us" />
          </Plx>
        </div>
      )
    }
  }
   
export default Home