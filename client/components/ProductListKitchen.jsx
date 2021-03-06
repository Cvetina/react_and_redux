import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import classNames from "classNames"
import  { loadProducts }  from '../API/httpRequests'
import  { addFavourites }  from '../actions/favouritesActions'
import  { toggleMenu }  from '../actions/uiActions'
import  { showSingleProductModal, hideSingleProductModal }  from '../actions/uiActions'
import LeftSidebar from './LeftSidebar'
import SingleProductModal from './SingleProductModal'
import Star from './shared/Star'
import style from './styles/ProductList'

@connect((store) => {
  return {
    products: store.products.products,
    toggleMenu: store.ui.toggleMenu,
    itemID: store.ui.itemID,
    favourites: store.favourites.items
  };
})
class ProductListKitchen extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts('kitchen'));
  }

  addItemToFavourites(item, index) {
    this.props.dispatch(addFavourites(item, index));
  }

  showSingleProductModal(item) {
    this.props.dispatch(showSingleProductModal(item));
  }

  hideSingleProductModal() {
    this.props.dispatch(hideSingleProductModal());
  }

  render() {
    const { products, toggleMenu, toggleSingleProductMenu, itemID, favourites } = this.props;
  
    const favID = favourites.map((favourite) => favourite.id);
  
    return   (
      <div className={style.container}>
        {products &&
          <LeftSidebar toggleMenu={toggleMenu}
        />
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
                      className={style.buttonAdd}
                      onClick={() => this.addItemToFavourites(item, index)} 
                    >
                   <span className={classNames(style.starButton, { [style.active]: favID.filter((id) => id === item.id).length > 0 })}>
                      <Star />
                  </span>
                  </button>
                  </span>
                  <img className={style.productImage} src={item.image} />
                  <div className={style.productDescription}>
                    <h4 className={classNames(style.price, { [style.strike]: item.sale})}>
                      {item.price}
                      {item.sale &&
                        <span className={style.sale} >{item.salePrice}</span>
                      }
                    </h4>
                    <h4>{item.material} {item.color}</h4>
                    <p>Description: {item.description}</p>
                  </div>
                  <button
                    title={`Show me ${item.title}`}
                    className={style.buttonShow}
                    onClick={() => this.showSingleProductModal(item)} 
                    >
                    <span className={style.buttonShowBorder}>Show more</span>
                  </button>
                  {itemID === item.id &&
                    <SingleProductModal 
                      showModal={itemID === item.id}
                      hideModal={() => this.hideSingleProductModal()}
                      item={item}
                    />
                  }
                </div>)
            }
        </div>
      </div>
    )
  }
}
export default ProductListKitchen

