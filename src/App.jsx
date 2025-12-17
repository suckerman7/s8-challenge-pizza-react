import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import OrderPizza from '../components/OrderPizza';
import Success from '../components/Success';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className='content-section'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/order'>
              <OrderPizza />
            </Route>

            <Route path='/success'>
              <Success />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App
