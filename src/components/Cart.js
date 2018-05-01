import React from 'react'
import PropTypes from 'prop-types'
import CartProduct from './CartProduct'
import '../styles/CustomStyles.css'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  //---if product exist then map array of products
  const nodes = hasProducts ? (
    <div>
    {
    products.map(product =>
      <CartProduct
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
     )
    }
      <p>Total: &#36;{total}</p>
      <button className="btn checkout z-depth-0 light-blue darken-3" onClick={onCheckoutClicked} disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>


  ) : (
    <div>
      <em>Please add some products to cart.</em>
      <div className="empty-cart">
        <i className="material-icons">shopping_cart</i>
        <br />
      <em>Please add some products to cart.</em>
      </div>
    </div>
  )

  return (

    <div>
      <div className="cart-header">
        <h4>Your Cart</h4>
        <a href="#!" className="modal-action modal-close btn-flat"><i className="material-icons">close</i></a>
      </div>
        <div>{nodes}</div>
         {/*
        <p>Total: &#36;{total}</p>
        <button onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
        */}
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
