import React from 'react'
import Todo from './Todo'
import ProductList from './ProductList'
import style from './styles/App'

export default class App extends React.Component {
  render() {
    return (
        <div className={style.container}>
          <Todo />
          <ProductList />
        </div>
    );
  }
}