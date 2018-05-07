import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import classNames from "classNames"
import  { loadProducts }  from '../API/httpRequests'
import  { addFavourites }  from '../actions/favouritesActions'
import  { showSingleProductModal, hideSingleProductModal }  from '../actions/uiActions'
import LeftSidebar from './LeftSidebar'
import SingleProduct from './SingleProduct'
import Star from './shared/Star'
import style from './styles/ProductList'

@connect((store) => {
  return {
    products: store.products.products,
    toggleMenu: store.ui.toggleMenu,
    itemID: store.ui.itemID
  };
})
class ProductListSofa extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts('sofa'));
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
    const { products, toggleMenu, itemID } = this.props;
  
    return   (
      <div className={style.container}>
        {products &&
         <LeftSidebar sofaItems={products.sofa} toggleMenu={toggleMenu} />
        }
        {!products &&
          <div className={style.loader}>
            <div className={style.loaderCubeOne} />
            <div className={style.loaderCubeTwo} />
        </div>
        }
        <div className={style.productContainer}>
          {products && products.sofa &&
              products.sofa.map((item, index) => 
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
                    Show more
                  </button>
                  {itemID === item.id &&
                    <SingleProduct 
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
export default ProductListSofa

