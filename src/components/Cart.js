import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  //---if product exist then map array of products
  const nodes = hasProducts ? (
    <div>
    {
    products.map(product =>
      <Product
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
      <h4>Your Cart</h4>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
