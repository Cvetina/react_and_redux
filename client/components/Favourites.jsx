import React from "react"
import { connect } from "react-redux"
import  { removeFavourites }  from '../actions/favouritesActions'
import LeftSidebar from './LeftSidebar'
import style from './styles/Favourites'

@connect((store) => {
  return {
    favourites: store.favourites.items
  };
})
class Favourites extends React.Component {  
    removeItemFromFavourites(item, index) {
      this.props.dispatch(removeFavourites(item, index));
    }

    render() {
      const { favourites } = this.props;
      return (
        <div className={style.containerFavourites}>
          <LeftSidebar />
          {favourites.length === 0 &&
            <div className={style.message}>Select your Favourites from Product List Categories</div>
          }
          {favourites &&
            favourites.map((item, index) => 
              <div key={index} className={style.productItem}>
                <span className={style.title}>
                  {item.title}
                  <button className={style.buttonRemove} onClick={() => this.removeItemFromFavourites(item, index)} > 
                    x 
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
      )
    }
  }
   
export default Favourites