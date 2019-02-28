import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/Checkout/Checkout';
import {Route ,Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders';


class App extends Component {
  render() {
    return (
      <div>
      <Layout>
        <Switch>
          <Route path = "/" exact component = {BurgerBuilder} />
          <Route path = "/checkout" component = {CheckOut} />
          <Route path = "/Orders" component = {Orders} />
        </Switch>
       </Layout> 
      </div>
    );
  }
}

export default App;