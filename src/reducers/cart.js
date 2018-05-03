import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  INCREMENT,
  DECREMENT
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    case REMOVE_FROM_CART:

      if (state.indexOf(action.productId) !== -1) {
        return state.filter((item) => action.productId !== item)
      }
      return state
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {

  const { productId } = action

  switch (action.type) {
    case ADD_TO_CART:
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }

    case REMOVE_FROM_CART:

      let newState = Object.assign({}, state)
      if(newState[productId]) delete newState[productId]
      return { ...newState}

    case INCREMENT:
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }

    case DECREMENT:
      return { ...state,
        [productId]: (state[productId] || 0) - 1
      }

    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
