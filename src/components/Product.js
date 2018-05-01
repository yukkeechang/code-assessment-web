import React from 'react'
import PropTypes from 'prop-types'
//import '../styles/CustomStyles.css'

const Product = ({ price, inventory, title }) => (
  <div>
    <div className="row">
    <div className="col s6">
      <h5>{title} </h5>
      <br />
      {inventory ? `${inventory} remaining` : null}
    </div>
    <div className="col s6">
    &#36;{price}
    </div>
   </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
