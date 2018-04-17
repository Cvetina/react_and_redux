import React, { Component } from 'react';
import Slider from 'react-slick';
 
class MainSlider extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillReceiveProps(){
		this.refs.slick.innerSlider.onWindowResized()
	}
	render() {
		const settings = { 
			autoplay: true,
			pauseOnHover: true,
			dots: true,
			arrows: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1
	}
	return (
		<Slider ref="slick" {...settings}>
			{this.props.children}
		</Slider>
		);
	}
}
export default MainSlider;