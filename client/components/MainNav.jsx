import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './styles/MainNav'

class MainNav extends React.Component {   
    render() {
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
          </NavLink>
        </div>
      )
    }
  }
   
export default MainNav