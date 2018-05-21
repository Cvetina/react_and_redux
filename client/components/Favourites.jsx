import React from "react"
import { connect } from "react-redux"
import  { removeFavourites }  from '../actions/favouritesActions'
import  { showSingleProductModal, hideSingleProductModal }  from '../actions/uiActions'
import LeftSidebar from './LeftSidebar'
import SingleProductModal from './SingleProductModal'
import Remove from './shared/Remove'
import Star from './shared/Star'
import style from './styles/Favourites'

@connect((store) => {
  return {
    favourites: store.favourites.items,
    toggleMenu: store.ui.toggleMenu,
    itemID: store.ui.itemID
  };
})
class Favourites extends React.Component {  
    removeItemFromFavourites(item, index) {
      this.props.dispatch(removeFavourites(item, index));
    }
    
    showSingleProductModal(item) {
      this.props.dispatch(showSingleProductModal(item));
    }

    hideSingleProductModal() {
      this.props.dispatch(hideSingleProductModal());
    }

    render() {
      const { favourites, toggleMenu, itemID } = this.props;
      return (
        <div className={style.container}>
          <LeftSidebar  toggleMenu={toggleMenu} />
          <div className={style.containerFavourites}>
            {favourites.length === 0 &&
              <h5 className={style.message}><Star />Select your Favourites from Product List Categories</h5>
            }
            {favourites &&
              favourites.map((item, index) => 
                <div key={index} className={style.productItem}>
                  <span className={style.title}>
                    {item.title}
                    <button title="Remove from list" className={style.buttonRemove} onClick={() => this.removeItemFromFavourites(item, index)} > 
                      <Remove />
                    </button>
                  </span> 
                  <img className={style.productImage} src={item.image} />
                  <div className={style.productDescription}>
                    <h3>{item.price}</h3>
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
   
export default Favourites