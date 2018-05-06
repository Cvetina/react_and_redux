import React from 'react'
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom';
import  { toggleMenu }  from '../actions/uiActions'
import Home from './shared/Home'
import Menu from './shared/Menu'
import Star from './shared/Star'
import Products from './shared/Products'

import style from './styles/MainNav'

@connect((store) => {
  return {
    favourites: store.favourites.items,
    products: store.products.products,
    toggleFavourites: store.ui.toggleMenu
  };
})
class MainNav extends React.Component {   

    toggleMenu() {
      this.props.dispatch(toggleMenu());
    }
    render() {
      const { favourites, products } = this.props;
  
      return (
        <div className={style.navContainer}>
          {products &&
            <button className={style.navItemMobile} onClick={() => this.toggleMenu()}><Menu /></button>
          }
          <NavLink exact activeClassName={style.current} className={style.navItem} to="/">
            <Home className={style.icon} />
            <span className={style.text}>Home</span>
          </NavLink>
          <NavLink exact activeClassName={style.current} className={style.navItem} to="/products">
            <Products className={style.icon} />
            <span className={style.text}>Product List</span>
          </NavLink>
          <NavLink exact activeClassName={style.current} className={style.navItem} to="/favourites">
            <Star className={style.icon} />
            <span className={style.text}>Favourites</span>
            {favourites.length > 0 &&
             <span className={style.favouritesCount}>{favourites.length}</span>
            }
          </NavLink>
        </div>
      )
    }
  }
   
export default MainNav