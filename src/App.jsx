import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
import Success from "./components/Success";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={OrderPizza} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>
  );
}