import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import  { loadProducts }  from '../API/httpRequests'
import  { addFavourites }  from '../actions/uiActions'
import LeftSidebar from './LeftSidebar'
import Star from './shared/Star'
import style from './styles/ProductList'

@connect((store) => {
  return {
    products: store.products.products,
    toggleFavourites: store.toggleFavourites
  };
})
class ProductListBedroom extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts('bedroom'));
  }

  handleToggleFavourites() {
    this.props.dispatch(addFavourites());
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
                <span className={style.title}>
                  {item.title}<Star toggle={this.handleToggleFavourites.bind(this)} />
                </span> 
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

