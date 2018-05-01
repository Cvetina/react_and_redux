import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import  { loadProducts }  from '../API/httpRequests'
import  { addFavourites }  from '../actions/favouritesActions'
import  { toggleActiveFavourites }  from '../actions/uiActions'
import LeftSidebar from './LeftSidebar'
import Star from './shared/Star'
import style from './styles/ProductList'

@connect((store) => {
  return {
    products: store.products.products,
    toggleFavourites: store.ui.toggleActiveFavourites
  };
})
class ProductListKitchen extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts('kitchen'));
  }

  addItemToFavourites(item, index) {
    this.props.dispatch(addFavourites(item, index));
    this.props.dispatch(toggleActiveFavourites());
  }

  render() {
    const { products, toggleFavourites } = this.props
  
    return   (
      <div className={style.container}>
        {
          products && <LeftSidebar kitchenItems={products.kitchen} />
        }
        {!products &&
          <div className={style.loader}>
            <div className={style.loaderCubeOne} />
            <div className={style.loaderCubeTwo} />
          </div>
        }
        <div className={style.productContainer}>
          {products && products.kitchen &&
              products.kitchen.map((item, index) => 
                <div key={index} className={style.productItem}>
                  <span className={style.title}>
                    {item.title}
                    <button
                      title="Add to favourites list"
                      className={classNames(style.buttonAdd, { [style.selected]: toggleFavourites })}
                      onClick={() => this.addItemToFavourites(item, index)} 
                    >
                    <Star />
                  </button>
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
export default ProductListKitchen

