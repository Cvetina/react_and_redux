import React from 'react'
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom';
import Home from './shared/Home'
import Star from './shared/Star'
import Products from './shared/Products'
import style from './styles/MainNav'

@connect((store) => {
  return {
    favourites: store.favourites.items
  };
})
class MainNav extends React.Component {   
    render() {
      const { favourites } = this.props;
  
      return (
        <div className={style.navContainer}>
          <NavLink exact activeClassName={style.current} className={style.navItem} to="/">
            <span className={style.icon}><Home /></span>
            <span className={style.text}>Home</span>
          </NavLink>
          <NavLink exact activeClassName={style.current} className={style.navItem} to="/products">
            <span className={style.icon}><Products /></span>
            <span className={style.text}>Product List</span>
          </NavLink>
          <NavLink exact activeClassName={style.current} className={style.navItem} to="/favourites">
            <span className={style.icon}><Star /></span>
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