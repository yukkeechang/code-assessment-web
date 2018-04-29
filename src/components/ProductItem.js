import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
//getting custom css to override materialize
import CustomStyles from '../styles/CustomStyles.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="col s12 m7">
    <div className="product-item-card card small hide-on-small-only horizontal z-depth-0">
      <div className="card-image">
        <img className="responsive-img" alt="" src={product.photo}/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <div style={{ marginBottom: 20 }}>
            <Product
              title={product.title}
              price={product.price}
              inventory={product.inventory} />
            <button
              className="btn z-depth-0 add-to-cart light-blue darken-3"
              onClick={onAddToCartClicked}
              disabled={product.inventory > 0 ? '' : 'disabled'}>
                {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)





//
// ProductItem.propTypes = {
//   product: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     inventory: PropTypes.number.isRequired
//   }).isRequired,
//   onAddToCartClicked: PropTypes.func.isRequired
// }

export default ProductItem
