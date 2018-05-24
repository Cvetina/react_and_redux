import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux"
import classNames from "classNames"
import onClickOutside from "react-onclickoutside"
import  { toggleMenu, hideMenu }  from '../actions/uiActions'
import Menu from './shared/Menu'
import Remove from './shared/Remove'
import style from './styles/LeftSidebar'


@connect((store) => {
  return {
    toggleMenu: store.ui.toggleMenu
  };
})
@onClickOutside
class LeftSidebar extends React.Component {   
  handleClickOutside (event) {
    this.props.dispatch(hideMenu());
  }
 
  toggleMenu (event) {
    this.props.dispatch(toggleMenu());
  }

  render() {
    const { toggleMenu } = this.props;
    const menuStyle = classNames(style.navContainer, { [style.active]: toggleMenu});
    const menuIconStyle = classNames(style.navIconMobile, { [style.removeIcon]: toggleMenu});

    return (
      <div className={menuStyle}>
        <span className={menuIconStyle} onClick={() => this.toggleMenu()}>
        { toggleMenu
          ? <Remove />
          : <Menu />
        }
        </span>
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
        <NavLink exact activeClassName={style.current} className={style.navItem} to="/products/office">
          Office
        </NavLink>
      </div>
    )
  }
}  
export default LeftSidebar