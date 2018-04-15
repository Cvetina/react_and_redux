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
class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts());
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
                  {item.images.map(image => 
                    <img className={style.productImage} src={image} />
                  )} 
              </div>)
          }
        </div>
        <div className={style.productContainer}>
          {products &&
            products.kitchen.map(item => 
              <div className={style.productItem}>
                <span className={style.title}>{item.title}</span> 
                  {item.images.map(image => 
                    <img className={style.productImage} src={image} />
                  )} 
              </div>)
          }
        </div>
      </div>
    )
  }
}
export default ProductList

