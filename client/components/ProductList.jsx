import React from "react"
import { Link } from 'react-router-dom';
import style from './styles/ProductList'

class ProductList extends React.Component {
  render() {
    const { products } = this.props

    return   (
      <div className={style.productContainer}>
        <Link to="/products/sofa" className={style.productContainer}>
          <div className={style.productItem}>
              <span className={style.groupTitle}>Sofa</span> 
              <img className={style.productImage} src="/client/images/sofas/sofa_1.jpg" />
            </div>
        </Link>
        <Link to="/products/kitchen" className={style.productContainer}>
          <div className={style.productItem}>
              <span className={style.groupTitle}>Kitchen</span> 
              <img className={style.productImage} src="/client/images/kitchen/kitchen_1.jpg" />
            </div>
        </Link>
        <Link to="/products/bedroom" className={style.productContainer}>
          <div className={style.productItem}>
              <span className={style.groupTitle}>Bedroom</span> 
              <img className={style.productImage} src="/client/images/kitchen/kitchen_1.jpg" />
            </div>
        </Link>
      </div>
    )
  }
}
export default ProductList

