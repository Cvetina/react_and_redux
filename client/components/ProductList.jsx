import React from "react"
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import LeftSidebar from './LeftSidebar'
import style from './styles/ProductList'

@connect((store) => {
  return {
    toggleMenu: store.ui.toggleMenu
  };
})
class ProductList extends React.Component {
  render() {
    const { products, toggleMenu } = this.props

    return   (
      <div className={style.mainContainer}>
        <LeftSidebar toggleMenu={toggleMenu} />
        <div className={style.productContainer}>
          <Link to="/products/sofa">
            <div className={style.productItem}>
                <span className={style.groupTitle}>Sofa</span> 
                <img className={style.productImage} src="/client/images/sofas/sofa_1.jpg" />
              </div>
          </Link>
          <Link to="/products/kitchen">
            <div className={style.productItem}>
                <span className={style.groupTitle}>Kitchen</span> 
                <img className={style.productImage} src="/client/images/kitchen/kitchen_1.jpg" />
              </div>
          </Link>
          <Link to="/products/bedroom">
            <div className={style.productItem}>
                <span className={style.groupTitle}>Bedroom</span> 
                <img className={style.productImage} src="/client/images/kitchen/kitchen_1.jpg" />
              </div>
          </Link>
        </div>
      </div>
    )
  }
}
export default ProductList

