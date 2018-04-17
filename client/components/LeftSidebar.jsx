import React from 'react'
import { Link } from 'react-router-dom';
import style from './styles/LeftSidebar'

function LeftSidebar(props) { 
    return (
      <div className={style.navContainer}>
        <Link className={style.navItem} to="/sofa">Sofa</Link>
        <ul className={style.subNavContainer}>
            {props.sofaItems && props.sofaItems.map(item => 
                  
                  <li>
                    <Link className={style.navItem} to="#">{item.title}</Link>
                  </li>
              )}
            </ul>
        <Link className={style.navItem} to="/kitchen">Kitchen</Link>
        <ul className={style.subNavContainer}>
            {props.kitchenItems && props.kitchenItems.map(item => 
              
                <li>
                  <Link className={style.navItem} to="#">{item.title}</Link>
                </li>
            )}
          </ul>
        <Link className={style.navItem} to="/bedroom">Bedroom</Link>
        <ul className={style.subNavContainer}>
            {props.bedroomItems && props.bedroomItems.map(item => 
                
                <li>
                  <Link className={style.navItem} to="#">{item.title}</Link>
                </li>
            )}
          </ul>
      </div>
    )
  }
   
export default LeftSidebar