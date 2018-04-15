import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import MainNav from './MainNav'
import ProductListSofa from './ProductListSofa'
import Todo from './Todo'
import style from './styles/App'

export default class App extends React.Component {
  render() {
    return (
        <div className={style.container}>
          <MainNav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products' component={ProductListSofa} />
            <Route path='/todos' component={Todo} />
          </Switch>
        </div>
    );
  }
}