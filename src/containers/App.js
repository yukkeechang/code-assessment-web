import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () => (
  <div className="container">

    <div className="row">
      <div className="col s6">
        <div className="logo-part">
          <h2>Acme Store</h2>
        </div>
      </div>
      <div className="col s6">
        <div className="cart-part">
          <a className="cart-link default modal-trigger" href="#modal1">
            <i className="material-icons">shopping_cart</i>
            <span>Your cart is empty</span>
          </a>
        </div>
      </div>
    </div>
    <ProductsContainer/>

  </div>

)

export default App
