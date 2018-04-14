import React from 'react'
import { Link } from 'react-router-dom';
import style from './styles/MainNav'

class MainNav extends React.Component {   
    render() {
      return (
        <div className={style.navContainer}>
          <Link className={style.navItem} to="/">Home</Link>
          <Link className={style.navItem} to="/products">Product List</Link>
          <Link className={style.navItem} to="/todos">todos List</Link>
        </div>
      )
    }
  }
   
export default MainNav