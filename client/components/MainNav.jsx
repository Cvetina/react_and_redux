import React from 'react'
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom';
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
            Home
          </NavLink>
          <NavLink exact activeClassName={style.current} className={style.navItem} to="/products">
            Product List
          </NavLink>
          <NavLink exact activeClassName={style.current} className={style.navItem} to="/favourites">
            Favourites List 
            {favourites.length > 0 &&
             <span className={style.favouritesCount}>{favourites.length}</span>
            }
          </NavLink>
        </div>
      )
    }
  }
   
export default MainNav