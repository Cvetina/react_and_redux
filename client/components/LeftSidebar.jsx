import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import style from './styles/LeftSidebar'

function LeftSidebar(props) { 
    return (
      <div className={style.navContainer}>
        <NavLink exact activeClassName={style.current} className={style.navItem} to="/products/sofa">
          Sofa
        </NavLink>
        <ul className={style.subNavContainer}>
            {props.sofaItems && props.sofaItems.map((item, index) => 
                  
                  <li key={index}>
                    <Link className={style.navItem} to="#">{item.title}</Link>
                  </li>
              )}
            </ul>
        <NavLink exact activeClassName={style.current} className={style.navItem} to="/products/kitchen">
          Kitchen
        </NavLink>
        <ul className={style.subNavContainer}>
            {props.kitchenItems && props.kitchenItems.map((item, index) => 
              
                <li key={index}>
                  <Link className={style.navItem} to="#">{item.title}</Link>
                </li>
            )}
          </ul>
        <NavLink exact activeClassName={style.current} className={style.navItem} to="/products/bedroom">
          Bedroom
        </NavLink>
        <ul className={style.subNavContainer}>
            {props.bedroomItems && props.bedroomItems.map((item, index) => 
                
                <li key={index}>
                  <Link className={style.navItem} to="#">{item.title}</Link>
                </li>
            )}
          </ul>
      </div>
    )
  }
   
export default LeftSidebar