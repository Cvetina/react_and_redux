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
        {products &&
          products.sofa.map(item => <li>{item.title}</li>)
        }
      </div>
    )
  }
}
export default ProductList

