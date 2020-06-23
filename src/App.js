import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import './App.css'
import Cart from './Components/Cart/';
import Details from './Components/Details';
import Navbar from './Components/Navbar';
import Default from './Components/Default';
import ProductList from './Components/ProductList';
import Modal from './Components/Modal';



class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
