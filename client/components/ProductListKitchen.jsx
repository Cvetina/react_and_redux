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
class ProductListKitchen extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts('kitchen'));
  }

  render() {
    const { products } = this.props

    return   (
      <div className={style.container}>
        {!products &&
          <div className={style.loader}>
            <div className={style.loaderCubeOne} />
            <div className={style.loaderCubeTwo} />
          </div>
        }
        <div className={style.productContainer}>
          {products && products.kitchen &&
            products.kitchen.map(item => 
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
export default ProductListKitchen

