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
    products: store.products.products
  };
})
class ProductListSofa extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts('sofa'));
  }

  addItemToFavourites(item) {
    this.props.dispatch(addFavourites(item));
  }

  render() {
    const { products } = this.props

    return   (
      <div className={style.container}>
        {
          products && <LeftSidebar sofaItems={products.sofa} />
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
                    <button onClick={() => this.addItemToFavourites(item)} >
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
export default ProductListSofa

