import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import MainNav from './MainNav'
import ProductList from './ProductList'
import ProductListSofa from './ProductListSofa'
import ProductListKitchen from './ProductListKitchen'
import ProductListBedroom from './ProductListBedroom'
import Favourites from './Favourites'
import Footer from './Footer'
import style from './styles/App'

export default class App extends React.Component {
  render() {
    return (
        <div className={style.container}>
          <MainNav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component={ProductList} />
            <Route path='/products/sofa' component={ProductListSofa} />
            <Route path='/products/kitchen' component={ProductListKitchen} />
            <Route path='/products/bedroom' component={ProductListBedroom} />
            <Route path='/favourites' component={Favourites} />
          </Switch>
          <Footer />
        </div>
    );
  }
}