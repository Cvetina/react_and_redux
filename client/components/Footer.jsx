import React from 'react'
import { Link } from 'react-router-dom'
import style from './styles/Footer'

export default class Footer extends React.Component {
  render() {
    return (
        <div className={style.container}>
          <div className={style.containerItem}>
            <h3>Contact us</h3>
            <p><b>Phone: </b> 000/010 202 303</p>
            <p><b>Email: </b><a href="mailto:test@example.io">test@example.io</a></p>
            <p><b>Address: </b> My Address</p>
          </div>
          <div className={style.containerItem}>
            <h3>Useful Links</h3>
            <p>First link</p>
            <p>Second link</p>
            <p>Third link</p>
          </div>
          <div className={style.containerItem}>
            <h3>Products List</h3>
            <Link className={style.link} to="/products/sofa">Sofa</Link>
            <Link className={style.link} to="/products/kitchen">Kitchen</Link>
            <Link className={style.link} to="/products/bedroom">Bedroom</Link>
            <Link className={style.link} to="/products/office">Office</Link>
          </div>
          <div className={style.containerItem}>
            <h3>More Info</h3>
            <Link className={style.link} to="#">FAQ</Link>
            <Link className={style.link} to="/favourites">Favourites</Link>
          </div>
        </div>
    );
  }
}