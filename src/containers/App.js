import React, {Component} from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import ReactDOM from 'react-dom';
import CustomStyles from '../styles/CustomStyles.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <div className="logo-part">
              <h2>Acme Store</h2>
            </div>
          </div>
          <div className="col s6">
            <div className="cart-part">
              <a className="cart-link default modal-trigger" href="#modal1" onClick={()=>{console.log("modal clicked")}}>
                <i className="material-icons">shopping_cart</i>
                <span>Your cart is empty</span>
              </a>
            </div>
          </div>
        </div>
        <ProductsContainer/>
        <br />
        <br />

        <div id="modal1" className="modal">
          <div className="modal-content">
            <CartContainer />
          </div>
        </div>

      </div>
    )
  }
}




export default App
