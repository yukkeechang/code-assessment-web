import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

const removeFromCartUnsafe = (productId, qty) => ({
  type: types.REMOVE_FROM_CART,
  productId,
  qty
})

export const removeFromCart = productId => (dispatch, getState) => {
  if (getState().cart.addedIds.length > 0) {
    dispatch(removeFromCartUnsafe(productId, getState().cart.quantityById[productId] ))
  }
}

export const incrementQty = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch({
      type: types.INCREMENT,
      productId
    });
  }
}

export const decrementQty = productId => (dispatch, getState) => {
  if (getState().cart.quantityById[productId] > 1) {
    dispatch({
      type: types.DECREMENT,
      productId
    });
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
