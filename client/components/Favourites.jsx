import React from "react"
import { connect } from "react-redux"
import  { removeFavourites }  from '../actions/favouritesActions'
import LeftSidebar from './LeftSidebar'
import Remove from './shared/Remove'
import style from './styles/Favourites'

@connect((store) => {
  return {
    favourites: store.favourites.items,
    toggleFavourites: store.ui.toggleMenu
  };
})
class Favourites extends React.Component {  
    removeItemFromFavourites(item, index) {
      this.props.dispatch(removeFavourites(item, index));
    }

    render() {
      const { favourites, toggleFavourites } = this.props;
      return (
        <div className={style.container}>
          <LeftSidebar  toggleMenu={toggleFavourites} />
          <div className={style.containerFavourites}>
            {favourites.length === 0 &&
              <div className={style.message}>Select your Favourites from Product List Categories</div>
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
                </div>)
            }
          </div>
        </div>
      )
    }
  }
   
export default Favourites