import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import classNames from "classNames"
import style from './styles/LeftSidebar'

function LeftSidebar(props) {
    return (
      <div className={classNames(style.navContainer, { [style.active]: props.toggleMenu})}>
        <NavLink exact activeClassName={style.current} className={style.navItem} to="/favourites">
          Favourites
        </NavLink>
        <NavLink exact activeClassName={style.current} className={style.navItem} to="/products/sofa">
          Sofa
        </NavLink>
        <NavLink exact activeClassName={style.current} className={style.navItem} to="/products/kitchen">
          Kitchen
        </NavLink>
        <NavLink exact activeClassName={style.current} className={style.navItem} to="/products/bedroom">
          Bedroom
        </NavLink>
      </div>
    )
  }
   
export default LeftSidebar