import './App.css';
import Home from "./components/Home"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/">
      <Home />
        </Route>

        <Route path="/users/:id">
      <ProductDetail />
        </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
