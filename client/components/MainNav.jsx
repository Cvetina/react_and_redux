import React from 'react'
import { Link } from 'react-router-dom';
import style from './styles/App'

class MainNav extends React.Component {   
    render() {
      return (
        <div>
          <Link to="/products">Products List</Link>
          <Link to="/todos">todos List</Link>
        </div>
      )
    }
  }
   
export default MainNav