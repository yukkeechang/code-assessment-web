import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ProductsContainer}/>
      <Route exact path="/cart" component={CartContainer}/>
    </Switch>
  </BrowserRouter>

)

export default App
