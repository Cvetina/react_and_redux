import React from "react"
import MainSlider from "./MainSlider"
import { connect } from "react-redux"
//import style from './styles/ProductItem'

@connect((store) => {
    return {
      products: store.products.products,
      toggleFavourites: store.ui.toggleMenu
    };
  })
  class ProductItem extends React.Component {
      render() {
        return (
            <div></div>
        )
      }
  }
export default ProductItem

