import React from 'react'
import PropTypes from 'prop-types'

import '../styles/CustomStyles.css'


class CartProduct extends React.Component {

  onRemove = (e) => {
    e.preventDefault();
    this.props.onRemoveItemClicked();
  }
  render() {
    const {price, title, photo} = this.props;
    return (
      <div>
        <br />
        <div className="cart-product">
          <div className="left-cart-product">

            <img className="responsive-img" alt="" width={150} src={photo} />
          </div>
          <div className="right-cart-product">
            <div className="product-details">
              <div className="infos">
                <h5>{title} </h5>
              </div>
              <div className="price">
                {price}
              </div>
            </div>

            <div className="cart-actions">
              <a className="btn-remove" href="" onClick={ (e) => this.onRemove(e)}>Remove</a>
            </div>
          </div>
        </div>

        <br />
        <div className="qty-update">
          <button className=" z-depth-0 waves-effect waves-light  btn-flat btn-minus"  ><i className="material-icons">remove</i></button>
          <input type="text" value={1} onChange={ () => {}} className="input-qty" />
          <button className=" z-depth-0 waves-effect waves-light  btn-flat btn-plus"  ><i className="material-icons">add</i></button>
          <br />
        </div>
        <br />
        <hr />
      </div>
    )
  }
}


CartProduct.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  photo: PropTypes.string,
  isCart: PropTypes.bool,
  onRemoveItemClicked: PropTypes.func
}

export default CartProduct
