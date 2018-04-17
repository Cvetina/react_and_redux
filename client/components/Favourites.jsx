import React from 'react'
import connect from 'redux-connect-decorator'
import LeftSidebar from './LeftSidebar'
import style from './styles/Favourites'

class Favourites extends React.Component {   
    render() {
      return (
        <div className={style.container}>
          <LeftSidebar />
          <div>Select your Favourites from Product List Categories</div>
        </div>
      )
    }
  }
   
export default Favourites