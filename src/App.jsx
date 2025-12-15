import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import OrderPizza from './components/OrderPizza';
import Success from './components/Success';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className='content-section'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/main' component={OrderPizza}/>
            <Route exact path='/success' component={Success}/>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App
