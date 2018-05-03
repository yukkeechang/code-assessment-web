import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout,removeFromCart, incrementQty, decrementQty } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'


const CartContainer = ({ products, total, checkout, removeFromCart, incrementQty, decrementQty }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
    onRemoveItemClicked={(productId) => removeFromCart(productId)}
    onIncrementQtyClicked={(productId) => incrementQty(productId)}
    onDecrementQtyClicked={(productId) => decrementQty(productId)}

    
   />

)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  incrementQty: PropTypes.func.isRequired,
  decrementQty: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout, removeFromCart, incrementQty, decrementQty  }
)(CartContainer)
