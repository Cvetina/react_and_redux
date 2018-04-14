import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import  { loadProducts }  from '../API/httpRequests'

@connect((store) => {
  return {
    products: store.products.products
  };
})
class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts());
  }

  render() {
    const { products } = this.props

    return   (
      <div>
        {!products &&
          <div>Loading...</div>
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

