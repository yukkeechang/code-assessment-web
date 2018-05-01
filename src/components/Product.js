import React from 'react'
import PropTypes from 'prop-types'


const Product = ({ price, quantity, title }) => (
  <div>
    <div className="product-details">
      <div className="infos">
        <h5>{title} </h5>
      </div>
      <div className="price">
      ${price}
      </div>
    </div>
    <div className="remaining">
      <span>{quantity ? ` ${quantity} remaining` : null}</span>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
