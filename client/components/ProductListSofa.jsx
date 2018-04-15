import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import  { loadProducts }  from '../API/httpRequests'
import style from './styles/ProductList'

@connect((store) => {
  return {
    products: store.products.products
  };
})
class ProductListSofa extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts('sofa'));
  }

  render() {
    const { products } = this.props

    return   (
      <div className={style.container}>
        {!products &&
          <div>Loading...</div>
        }
        <div className={style.productContainer}>
          {products &&
            products.sofa.map(item => 
              <div className={style.productItem}>
                <span className={style.title}>{item.title}</span> 
                <img className={style.productImage} src={item.image} />
              </div>)
          }
        </div>
      </div>
    )
  }
}
export default ProductListSofa

