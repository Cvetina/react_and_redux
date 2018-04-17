import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import  { loadProducts }  from '../API/httpRequests'
import LeftSidebar from './LeftSidebar'
import style from './styles/ProductList'

@connect((store) => {
  return {
    products: store.products.products
  };
})
class ProductListBedroom extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts('bedroom'));
  }

  render() {
    const { products } = this.props

    return   (
      <div className={style.container}>
        {
          products && <LeftSidebar bedroomItems={products.bedroom} />
        }
        {!products &&
          <div className={style.loader}>
            <div className={style.loaderCubeOne} />
            <div className={style.loaderCubeTwo} />
          </div>
        }
        <div className={style.productContainer}>
          {products && products.bedroom &&
            products.bedroom.map(item => 
              <div className={style.productItem}>
                <span className={style.title}>{item.title}</span> 
                <img className={style.productImage} src={item.image} />
                <div className={style.productDescription}>
                  <h3>{item.price}</h3>
                  <h4>{item.material} {item.color}</h4>
                  <p>Description: {item.description}</p>
                </div>
              </div>)
          }
        </div>
      </div>
    )
  }
}
export default ProductListBedroom

