/**
 * Mocking client-server processing
 */
// import _products from './products.json'
//
// const TIMEOUT = 100
//
// export default {
//   getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
//   buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
// }
// import _products from './products.json'
import axios from 'axios'

const TIMEOUT = 100

const getProducts = async (cb) => {

  try {
    let response = await axios.get('http://tech.work.co/shopping-cart/products.json')
    console.log(response)

    let _products = []
    if (response)
    _products = response.data.map(p => {
      return {
        id: p.id,
        title: p.productTitle,
        price: p.price.value,
        inventory: p.inventory,
        photo: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400'
      }
    });

    cb(_products)
  } catch (error) {
    console.log(error);
  }

}

export default {
  getProducts,
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
