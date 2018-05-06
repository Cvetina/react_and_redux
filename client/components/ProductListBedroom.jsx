import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import classNames from "classNames"
import  { loadProducts }  from '../API/httpRequests'
import  { addFavourites }  from '../actions/favouritesActions'
import LeftSidebar from './LeftSidebar'
import Star from './shared/Star'
import style from './styles/ProductList'

@connect((store) => {
  return {
    products: store.products.products,
    toggleFavourites: store.ui.toggleMenu
  };
})
class ProductListBedroom extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts('bedroom'));
  }

  addItemToFavourites(item, index) {
    this.props.dispatch(addFavourites(item, index));
  }

  render() {
    const { products, toggleFavourites } = this.props;
    return   (
      <div className={style.container}>
        {products && 
          <LeftSidebar bedroomItems={products.bedroom} toggleMenu={toggleFavourites} />
        }
        {!products &&
          <div className={style.loader}>
            <div className={style.loaderCubeOne} />
            <div className={style.loaderCubeTwo} />
          </div>
        }
        <div className={style.productContainer}>
          {products && products.bedroom &&
            products.bedroom.map((item, index) => 
              <div key={index} className={style.productItem}>
                <span className={style.title}>
                  {item.title}
                  <button
                    title="Add to favourites list"
                    className={style.buttonAdd}
                    onClick={() => this.addItemToFavourites(item, index)} 
                  >
                    <Star />
                  </button>
                </span> 
                <img className={style.productImage} src={item.image} />
                <div className={style.productDescription}>
                  <h3 className={classNames(style.price, { [style.strike]: item.sale})}>
                    {item.price}
                    {item.sale &&
                      <span className={style.sale} >{item.salePrice}</span>
                    }
                  </h3>
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

