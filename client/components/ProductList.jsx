import React from "react"
import { bindActionCreators, dispatch } from 'redux'
import { connect } from "react-redux"
import  { loadProducts }  from '../actions/productsActions'

@connect((store) => {
  return {
    products: store.products.products
  };
})
class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts());
  }

  fetchProducts() {
    this.props.dispatch(loadProducts());
  }

  render() {
    const { products } = this.props

    return   (
      <div>
        {!products &&
          <span>Loading...</span>
        }
        {products &&
          products.sofa.map(item => <div>{item.title} {item.images.map(image => <img src={image} />)} </div>)
        }
        {products &&
          products.kitchen.map(item => <div>{item.title} {item.images.map(image => <img src={image} />)} </div>)
        }
      </div>
    )
  }
}
export default ProductList

